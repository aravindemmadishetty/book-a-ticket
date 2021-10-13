function submitHandler(e){ // run on submitting the selection movie form
	e.preventDefault(); // prevents default actions like page reload
	checkAllFields();  
	if(this.checkValidity()){ // condition true if every field is non-empty
	
		//document.querySelector('.title-logo').style.display = "none";
		this.style.display = "none";
		document.querySelector('.reserve').style.display = "block";
		getMovieDetailsWhileReserve();
		populateSeats();
		disableReservedSeats();
		//populateArrangement();
		var checkBoxClickHandler = checkSeatFullfillment();
		document.querySelector('.content').onclick = checkBoxClickHandler;
		document.querySelector('button.previous').onclick = getFormPageClickHandler;
		
		//console.log(getData());
		/*
		data = {}
		document.querySelectorAll('select').forEach(function(el){
			data[el.name] = el.value;
		});
		localStorage.setItem('data', JSON.stringify(data));
		*/
	}
}

function checkFields(node){ // returns false upon submit if any of the form field is empty 
	if(node.disabled) return true;
	if(node.value=="") return false;
	return true;
}

function checkAllFields(){ //check every field and shows a warning message upon submission if there is any empty element
	document.querySelectorAll('select').forEach(function(el){
		if(!checkFields(el)){ 
			el.parentNode.lastElementChild.textContent = "Please select an option";
		}
		else{
			el.parentNode.lastElementChild.textContent = "";
		}
	});
	
}


var tktBookingForm = document.getElementById('bookticket');

tktBookingForm.onsubmit = submitHandler 

/*
window.addEventListener('storage', function(){
	console.log(localStorage.getItem('data'))
})
*/

document.querySelector('button.pay').onclick = payBtnHandler;
document.querySelector('button.to-seats').onclick = toSeatsHandler;

document.querySelector('button.confirm').onclick = showConfirmPopup;
document.querySelector('button.no').onclick = hideConfirmPopup;
document.querySelector('button.yes').onclick = storeDataUponConfirm ;