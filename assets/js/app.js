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

	// document.getElementById('today').innerHTML = today;
	document.write(today);
}
