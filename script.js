"use strict";

const num = 50; 

// if (num < 40) {
// 	console.log("Error!");
// } else if (num > 100) {
// 	console.log("Too much");
// } else {
// 	console.log("Ok");
// }

// (num === 100) ? console.log("Ok") : console.log("Error");

switch (num) {
	case 49: 
		console.log("Неверно");
		break;
	case 100:
		console.log("Неверно");
		break;
	case 50:
		console.log("Правда");
		break;
	default:
		console.log("Ничего не подходит");
		break;
}