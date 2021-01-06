// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')

// Level 1
// 01
// let age = Number(prompt('Enter your age: '))
// if (age >= 18) {
// 	alert('Your are old enough to drive.')
// } else if (age < 18) {
// 	alert(`You are left with ${18 - age} years to drive.`)
// }

// 02
// let yourAge = Number(prompt('Enter your age: '))
// let myAge = 28
// if (yourAge > myAge) {
// 	console.log(`You are ${yourAge - myAge} years older than me`)
// } else if (yourAge < myAge) { 
// 	console.log(`I am ${myAge - yourAge} years older than you`)
// } else {
// 	console.log(`We are the same age :D`)
// }

// 03
// let a = 4
// let b = 3

// if (a > b) {
// 	console.log(`${a} is greater than ${b}`)
// } else {
// 	console.log(`${a} is less than ${b}`)
// }

// console.log(`${a} is ${a > b ? 'greater' : 'less'} than ${b}`)

// 04
// let number = Number(prompt('Enter a number: '))
// let numberType = (number % 2 == 0) ? 'even' : 'odd'
// console.log(`${number} is an ${numberType} number`)

// Level 2
// 01
// let score = Number(prompt('Enter your score: '))
// let grade = 'invalid input'

// switch (true) {
// 	case score >= 80 && score <= 100:
// 		grade = 'A'
// 		break;
// 	case score >= 70 && score <= 79:
// 		grade = 'B'
// 		break;
// 	case score >= 60 && score <= 69:
// 		grade = 'C'
// 		break;
// 	case score >= 50 && score <= 59:
// 		grade = 'D'
// 		break;
// 	case score >= 0 && score <= 49:
// 		grade = 'F'
// 		break;
// }
// console.log(grade)

// 02
// let month = prompt('Enter the month')
// let season

// switch (month) {
// 	case 'September':
// 	case 'October':
// 	case 'November':
// 		season = 'Autumn'
// 		break
// 	case 'December':
// 	case 'January':
// 	case 'February':
// 		season = 'Winter'
// 		break
// 	case 'March':
// 	case 'April':
// 	case 'May':
// 		season = 'Spring'
// 		break
// 	case 'June':
// 	case 'July':
// 	case 'August':
// 		season = 'Summer'
// 		break
// }

// console.log(`The season is ${season}`)

// 03

// let today = prompt('What day is today? ').toLowerCase()
// today = today.charAt(0).toUpperCase() + today.slice(1)
// console.log(today)

// switch (today) {
// 	case 'Monday':
// 	case 'Tuesday':
// 	case 'Wednesday':
// 	case 'Thursday':
// 	case 'Friday':
// 		console.log(`${today} is working day`)
// 		break
// 	case 'Saturday':
// 	case 'Sunday':
// 		console.log(`${today} is weekend day`)
// 		break
// }

// Level 03
// 01

let month = prompt('Enter the month').toLowerCase()
let days

switch (month) {
	case 'january':
	case 'march':
	case 'may':
	case 'july':
	case 'august':
	case 'october':
	case 'december':
		days = 31
		break
	case 'april':
	case 'june':
	case 'september':
	case 'november':
		days = 30
		break
	case 'february':
		let year = prompt('Enter the year:')
		if (year % 4 == 0) {
			if (year % 100 == 0) {
				if (yes % 400 == 0) {
					days = 29
				} else {
					days = 28
				}
			} else {
				days = 29
			}
		} else {
			days = 28
		}
		break
}

console.log(`${month} has ${days} days.`)