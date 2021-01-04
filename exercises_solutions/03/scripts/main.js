// Level 1

// 01
console.log('--- 01')
let firstName = 'Aline',
	lastName = 'Fukuhara',
	country = 'Brazil',
	city = 'São Paulo',
	age = 28,
	isMarried = false,
	year = 2021
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// 02
console.log('--- 02')
console.log(typeof(10) == typeof('10'))

// 03
console.log('--- 03')
console.log(parseInt('9.8') == 10)

//04
console.log('--- 04')
console.log(1 == 1)
console.log(Boolean(1))
console.log(Boolean('aline'))
console.log(Boolean(1 == 2))
console.log(Boolean(''))
console.log(Boolean(0))

// 05
console.log('--- 05')
console.log((4 > 3) == true)
console.log((4 >= 3) == true)
console.log((4 < 3) == false)
console.log((4 <= 3) == false)
console.log((4 == 4) == true)
console.log((4 === 4) == true)
console.log((4 != 4) == false)
console.log((4 !== 4) == false)
console.log((4 != '4') == false)
console.log((4 == '4') == true)
console.log((4 === '4') == false)
console.log(('python'.length != 'jargon'.length) == false)

// 06
console.log('--- 06')
console.log(true == (4 > 3 && 10 < 12))
console.log(false == (4 > 3 && 10 > 12))
console.log(true == (4 > 3 || 10 < 12))
console.log(true == (4 > 3 || 10 > 12))
console.log(false == !(4 > 3))
console.log(true == !(4 < 3))
console.log(true == !(false))
console.log(false == !(4 > 3 && 10 < 12))
console.log(true == !(4 > 3 && 10 > 12))
console.log(true == !(4 === '4'))
console.log(false == (('dragon'.includes('on') && 'python'.includes('on')) == false))

// 07
console.log('--- 07')
let today = new Date()
console.log(today.getFullYear())
console.log(today.getMonth() + 1)
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getTime() / (1000))

// Level 2
// 01
console.log('--- 01')
let base = Number(prompt('Enter base: '))
let height = Number(prompt('Enter height'))
console.log(`The area of the triangle is ${base * height / 2}`)
alert(`The area of the triangle is ${base * height / 2}`)

// 02
console.log('--- 02')
let sideA = Number(prompt('Enter side a: '))
let sideB = Number(prompt('Enter side b: '))
let sideC = Number(prompt('Enter side c: '))
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`)

// 03 
console.log('--- 03')
let length = Number(prompt('Enter the length: '))
let width = Number(prompt('Enter the width: '))
console.log(`rectangle area: ${length * width}`)
console.log(`rectangle perimeter: ${2 * (length + width)}`)

// 04
console.log('--- 04')
let radius = Number(prompt('Enter the radius: '))
console.log(`circle area: ${Math.PI * radius ** 2}`)
console.log(`circle perimeter: ${Math.PI * 2 * radius}`)

// 05
console.log('--- 05')
let y = 0
let x = 0
let yIntercept = 2 * x - 2
let xIntercept = (y + 2) / 2
let slope5 = (0 - yIntercept) / (xIntercept - 0)
console.log(slope5, xIntercept, yIntercept)

// 06
console.log('--- 06')
let slope = (10 - 2) / (6 - 2)
console.log(slope)

// 07
console.log('--- 07')
console.log(slope5 == slope)

// 08
console.log('--- 08')
y = 0
x = -10
while (x ** 2 + 6 * x + 9 != 0)
	x++
console.log(`x is ${x} when y is zero`)

// 09
console.log('--- 09')
let hours = Number(prompt('Enter hours: '))
let ratePerHour = Number(prompt('Enter rate per hour: '))
console.log(`Your weekly earning is ${hours * ratePerHour}`)

// 10
console.log('--- 10')
let name = prompt('Enter your name: ')
console.log(
	name.length > 7 ? 'Your name is long' : 'Your name is short'
)

// 11
console.log('--- 11')
stringComparison = firstName.length > lastName.length ? 'longer' : 'shorter'
console.log(`Your first name, ${firstName} is ${stringComparison} than your family name, ${lastName}`)

// 12
console.log('--- 12')
let myAge = 28
let yourAge = 24
console.log(`I am ${myAge - yourAge} years older than you`)

// 13
console.log('--- 13')
let birthYear = Number(prompt('Enter birth year: '))
yourAge = today.getFullYear() - birthYear
let message = yourAge >= 18 ? `You are ${yourAge}. You are old enough to drive.` : `You are ${yourAge}. You will be allowed to drive after ${18 - yourAge} years.`
console.log(message)

// 14
console.log('--- 14')
lifeYears = Number(prompt('Enter the number of years you live: '))
console.log(`You live ${lifeYears * 365 * 24 * 60 * 60} seconds.`)

// 15
console.log('--- 15')
year = today.getFullYear()
let month = today.getMonth() + 1
let day = today.getDate()
let hour = today.getHours()
let minutes = today.getMinutes()
let time1 = `${year}-${month}-${day} ${hours}:${minutes}`
let time2 = `${day}-${month}-${year} ${hours}:${minutes}`
let time3 = `${day}/${month}/${year} ${hours}:${minutes}`
console.log(time1, time2, time3)

// Level 3
formattedHour = hours < 10 ? `0${hours}` : hours
formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
let time4 = `${year}-${month}-${day} ${formattedHour}:${formattedMinutes}`
console.log(time4)
