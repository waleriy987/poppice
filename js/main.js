

function menu_open() {
	
	var menu = document.getElementById('menu_mobile');
	var pos = -250;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == 0) {
			clearInterval(id);
		}
		else{
			pos+=10;
			menu.style.left = pos + "px ";
		}
	}
}

function menu_close() {
	
	var menu = document.getElementById('menu_mobile');
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == -250) {
			clearInterval(id);
		}
		else{
			pos-=10;
			menu.style.left = pos + "px ";
		}
	}
}


///////////////////////////////////////////////////////////////


var $months = [
	'jan',
	'feb',
	'mar',
	'apr',
	'may',
	'jun',
	'jul',
	'aug',
	'sep',
	'oct',
	'nov',
	'dec'];

var $dat = new Date();
var $day = $dat.getDate() + " " + $months[$dat.getMonth()] + " " + $dat.getFullYear();

var box_date = document.getElementById('date_new');

box_date.innerHTML = $day;

