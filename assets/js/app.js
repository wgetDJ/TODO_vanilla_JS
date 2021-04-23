function currentDay(){
	const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
	];

	let currentMonth = MONTHS[(new Date()).getMonth()];
	let currentDate = (new Date()).getDate();
	if(currentDate<10) currentDate = '0' + currentDate;
	let currentYear = (new Date()).getFullYear();

	let today = currentMonth + " " + currentDate + ", " + currentYear

	document.write(today);
}


// function loader() {
// 	// let loading = document.getElementsByClassName('loader');
// 	// loading.style.display = "none";
// 	// let app = document.getElementsByClassName("container");
// 	// app.style.display = "block";
// 	// document.getElementsByClassName("loader").style.display = "none";
// }

// let time = setTimeout(loader, 4000);

function loader() {
	document.getElementsByClassName("loader").innerHTML = document.getElementsByClassName("container").innerHTML;
}

// setTimeout(loader, 4000);

function addJob() {

}