"use strict";

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log('Я прошла этот урок');
}

learnJS('JavaScript', done); //не вызываем функцию done, а передаем
//////////////////////////////////////
let menu = {
	width: 200,
  	height: 300,
  	title: "My menu"
}

function multiplyNumeric(obj) {
	for (let key in obj) {
		if(typeof(obj[key]) === 'number') {
			obj[key] *= 2;
		}
	}
}

multiplyNumeric(menu);

console.log(menu);

// function isEmpty(obj) {
// 	for (let key in obj) {
// 	  // если тело цикла начнет выполняться - значит в объекте есть свойства
// 	  return false;
// 	}
// 	return true;
//   }

console.log( multiplyNumeric(menu) );

// function sumSalaries(obj) {
// 	let sum = 0;
// 	if (isEmpty(obj) == true) {
// 		return sum;
// 	} else {
// 		for (let key in obj) {
// 			sum += obj[key]; 
// 		}
// 	}
// 	return sum;
// }


