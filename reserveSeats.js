/*
function getPreviousState(e){
	tktBookingForm.style.display = "block";
	this.style.display = "none";
	e.stopPropagation();
}
*/
//document.querySelector('.previous').addEventListener('click', getPreviousState);

function getPreviousData(){  //gets data from form fields
	var data = {}
	document.querySelectorAll('select').forEach(function(el){
		data[el.name] = el.value;
	});
	return data;
}

function getMovieDetailsWhileReserve(){ //gets movie details at the top of page while reserving seats
	var movie = getPreviousData().movie;
	movieData.forEach(function(movieObj){
		if(movieObj.mid.trim() == movie.trim()){
			if(document.querySelector('.movie-details').childElementCount){
				document.querySelector('.movie-details').innerHTML = '';
				getMovieDetailsWhileReserve();
			}
			else{
				document.querySelector('.movie-details').innerHTML = '<p>'+ movieObj.name + '</p><span>Starring </span><p>'+
																		movieObj.starring + '</p>';
			}
		}
	});
};

function generateDiv(theatre, col){ //generates a div element with a class name given as arguments
	var node = document.createElement('div')
	node.className = theatre + " " + col;
	return node;
}

function generateCheckBox(row, col){ //generates a checkbox element with a class name given as arguments
	var node = document.createElement('input')
	node.type = "checkbox";
	node.className = row + " " + col;
	return node;
}

function populateSeats(){ //generate seat matrix and assigns a number to every column and an alphabet to every row
	var floor = document.querySelector('.content');
	if(floor.childElementCount==0){ //populate if floor is empty
		var data = getPreviousData();
		var seats;
		theatreData.forEach(function(theatre){
			if(theatre.tid.trim() == data.theatre.trim()){
				seats = theatre.seatCount;
			}
		})
		
		//if(!(typeof arr)) return "can't populate seats";
		
		var alpha = "ABCDEFGHIJKLMNOP".split("");
		var divNode = generateDiv('rows',"");
		divNode.appendChild(document.createElement('span'));
		
		for(var k=0; k<seats[1]; k++){
			var node = document.createElement('span');
			node.textContent = alpha[k];
			divNode.appendChild(node);
		}
		floor.appendChild(divNode);
		
		for(var i=1; i<=seats[2]/2; i++){
			var divNode = generateDiv(data.theatre, i)
			var node = document.createElement('span');
			node.textContent = i;
			divNode.appendChild(node);
			for(var j = 1; j<=seats[1]; j++){
				var checkboxNode = generateCheckBox(i,j);
				var labelNode = document.createElement('label');
				labelNode.appendChild(checkboxNode);
				divNode.appendChild(labelNode);
			}
			floor.appendChild(divNode);
		}
		
		floor.appendChild(generateDiv("empty",""));
		
		for(;i<=seats[2]; i++){
			var divNode = generateDiv(data.theatre, i)
			var node = document.createElement('span');
			node.textContent = i;
			divNode.appendChild(node);
			for(var j = 1; j<=seats[1]; j++){
				var checkboxNode = generateCheckBox(i,j);
				var labelNode = document.createElement('label');
				labelNode.appendChild(checkboxNode);
				divNode.appendChild(labelNode);
			}
			floor.appendChild(divNode);
		}
	}
	else{ // empty floor if seats are already populated
		while(floor.childElementCount != 0){
			floor.children[0].outerHTML = "";
		}
		populateSeats();
	}
}
/*
function populateArrangement(){
	var columnNode = document.querySelector('.columns');
	var rowNode = document.querySelector('.rows');
	if(columnNode.childElementCount == 0){
		var contentDiv = document.querySelector('.content')
		var cols = contentDiv.childElementCount;
		var rows = contentDiv.firstElementChild.childElementCount;
		var i = 0 ;
		while(i <= cols){
			var divNode = generateDiv('numeric-cols',i);
			divNode.textContent = i+"";
			if(i== parseInt(cols/2)+1) divNode = generateDiv('empty',"");
			columnNode.appendChild(divNode);
			i++;
		}
		var i=0;
		while( i < rows ){
			var divNode = generateDiv('numeric-cols',i);
			divNode.textContent = i+"";
			rowNode.appendChild(divNode);
			i++;
		}
	}
	else{
		while(columnNode.childElementCount!=0){
			columnNode.children[0].outerHTML = "";
		};
		while(rowNode.childElementCount!=0){
			rowNode.children[0].outerHTML = "";
		};
		populateArrangement();
	}
}
*/
function disableReservedSeats(){ // disables all the seats that are previously booked
	var currentUserdata = getPreviousData();
	var flag;
	var seats ;
	var checkboxes = document.querySelectorAll('.content input[type=checkbox]');
	if(localStorage.getItem('data')){ 
		var data = JSON.parse(localStorage.getItem('data'));
		data.some(function(previousUser){
			for(var i in currentUserdata){
				if(previousUser.theatre != currentUserdata.theatre || previousUser.time !=currentUserdata.time){
					flag = false;
					break;
				}
				else flag = true;
			}
			if(flag){
				seats = previousUser.selectedSeats;
				checkboxes.forEach(function(node){
					var arr = Array.from(node.classList);
					arr = arr.length == 2? [arr[1], arr[0]]: [arr[0], arr[0]];
					seats.forEach(function(subarr){
						if(JSON.stringify(subarr) == JSON.stringify(arr)){
							node.disabled = true;
							return true;
						}
					});
				});
			}
		});
						
	}
}

function checkSeatFullfillment(){ //after users requirement for seats is finished, disables all the remaining seats.
	//console.log(getPreviousData());
	var seatCount = getPreviousData().ticketCount - 0;
	//console.log(seatCount);
	var counter = 0;
	var flag = false
	document.querySelector('button.pay').disabled = true;
	return function(ev){
		if(ev.target.type == "checkbox"){
			if(ev.target.checked == false){ //if checkbox unchecked
				if(flag){
					enableCheckboxNode(); 
				}
				--counter;
			}
			else ++counter;
		}
		if(counter == seatCount){
			flag = disableUnwantedCheckboxes();
			document.querySelector('button.pay').disabled = false;
		};
		if(counter<seatCount) document.querySelector('button.pay').disabled = true;
	}
}

function enableCheckboxNode(){ //enable all the checkboxes
	var checkboxes = document.querySelectorAll('.content input[type=checkbox]');
	checkboxes.forEach(function(node){
		node.disabled = false;
	});
	disableReservedSeats()
};

function disableUnwantedCheckboxes(){ //disable all the checkboxes that are not checked 
	var checkboxes = document.querySelectorAll('.content input[type=checkbox]');
	checkboxes.forEach( function(node){
		if(!node.checked){
			node.disabled = true;
		}
	});
	return true;
}

function getFormPageClickHandler(){	 //go to movie selection( back button)
	//document.querySelector('.title-logo').style.display = "block";
	document.querySelector('.reserve').style.display = 'none';
	document.querySelector('#bookticket').style.display = 'block';
}

