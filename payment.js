function payBtnHandler(){ //populates ticket details in the last step
	document.querySelector('.reserve').style.display = 'none';
	document.querySelector('.payment-page').style.display = 'flex';
	populateMovieDetalis();
}

function toSeatsHandler(){ // go to seat selection (back button)
	document.querySelector('.reserve').style.display = 'block';
	document.querySelector('.payment-page').style.display = 'none';
}
 
function getMovieDetails(){ //get movie name, poster, starring and director name
	var movie = getPreviousData().movie;
	movieData.forEach(function(movieObj){
		if(movieObj.mid.trim()== movie.trim()){
			document.querySelector('.image>img').src = "images/" + movie.trim() + ".jpg" ;
			document.querySelector('.image>img').alt = movieObj.name;
			document.querySelector('.movie-name').textContent = movieObj.name;
			document.querySelector('.starring').textContent = movieObj.starring;
			document.querySelector('.director').innerHTML = '<span>Directed by</span> '+ movieObj.director;
		};
	});
};

function getPriceDetails(){ // get total cost and other details about pricing 
	var ticketCount = getPreviousData().ticketCount;
	document.querySelector('.cfee>span').textContent = ticketCount*150*0.15;
	document.querySelector('.ticketfee>span').textContent = ticketCount*150;
	document.querySelector('.tfee>span').textContent = ticketCount*150*1.15;
}

function getSeatDetails(){ //get the details about the seats selected
	var seats=[];
	var checkboxes = document.querySelectorAll('.content input[type=checkbox]');
	var alpha = "ABCDEFGHIJKLMNOP".split("");
	checkboxes.forEach( function(node){
		if(node.checked){
			var arr = Array.from(node.classList)
		seats.push( arr.length==2? [arr[0], alpha[arr[1]-1]]: [arr[0], alpha[arr[0]-1]]);
		}
	});
	var string="";
	seats.forEach(function(seat){
		string+= "<span>" + seat[1] +""+ seat[0] + "</span> ";
	});
	
	document.querySelector('.ticket-count').innerHTML = "&nbsp;" + getPreviousData().ticketCount
	document.querySelector('.seat-numbers').innerHTML = string;
};

function getOtherDetails(){ //gets osther details like theatre name, city name, movie time etc.
	var data = getPreviousData();
	var theatreName;
	theatreData.forEach(function(theatre){
		if(theatre.tid.trim() == data.theatre.trim()){
			theatreName = theatre.name;
		}
	});
	var time = data.time;
	if(time.split(':')[0] - 0 == 11 ) time = time + "AM"
	else time = time + "PM";
	document.querySelector('.other-details').innerHTML = '<p>' + theatreName +"|"+ data.city[0].toUpperCase()+data.city.slice(1).toLowerCase() + "|" + time;
	
}


function populateMovieDetalis(){ //populates all the details above 
	getMovieDetails();
	getOtherDetails();
	getPriceDetails();
	getSeatDetails();
};

function showConfirmPopup(){ //shows a popup whether to confirm payment
	document.querySelector('.popup').style.display = "block";
	
};

function hideConfirmPopup(){ //hides the popup upon confirmation
	document.querySelector('.popup').style.display = "";
};

function storeDataUponConfirm(){ // stores the history in local storage.
	var data = getPreviousData();
	var allData=[];
	var selectedSeats = [];
	var checkboxes = document.querySelectorAll('.content input[type=checkbox]');
	
	checkboxes.forEach(function(node){
		if(node.checked){
			var arr = node.classList;
			selectedSeats.push(arr.length==2? [arr[1],arr[0]]: [arr[0],arr[0]]);
		}
	});
	
	data.selectedSeats = selectedSeats; 
	
	if(localStorage.getItem('data')){
		var allData= JSON.parse(localStorage.getItem('data'));
		allData.push(data)
		localStorage.setItem('data', JSON.stringify(allData));
	}
	else{
		allData.push(data);
		localStorage.setItem('data', JSON.stringify(allData));
	}
	hideConfirmPopup();
	document.querySelector('.final').style.display = 'block';
};