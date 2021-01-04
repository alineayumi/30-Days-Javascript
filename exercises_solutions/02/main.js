// Level 1

// 01 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript"

// 02 Print the string on the browser console using console.log()
console.log("02 Print the string on the browser console using console.log()")
console.log(challenge)

// 03 Print the length of the string on the browser console using console.log()
console.log("03 Print the length of the string on the browser console using console.log()")
console.log(challenge.length)

// 04 Change all the string characters to capital letters using toUpperCase() method
console.log("04 Change all the string characters to capital letters using toUpperCase() method")
console.log(challenge.toUpperCase())

// 05 Change all the string characters to lowercase letters using toLowerCase() method
console.log("05 Change all the string characters to lowercase letters using toLowerCase() method")
console.log(challenge.toLowerCase())

// 06 Cut (slice) out the first word of the string using substr() or substring() method
console.log("06 Cut (slice) out the first word of the string using substr() or substring() method")
console.log(challenge.substr(3, challenge.length - 3))
console.log(challenge.substring(3, challenge.length))

// 07 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("07 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.")
console.log(challenge.substr(0, 2))
console.log(challenge.substring(0, 2))

// 08 Check if the string contains a word Script using includes() method
console.log("08 Check if the string contains a word Script using includes() method")
console.log(challenge.includes("Script"))

// 09 Split the string into an array using split() method
console.log("09 Split the string into an array using split() method")
console.log(challenge.split())

// 10 Split the string 30 Days Of JavaScript at the space using split() method
console.log("10 Split the string 30 Days Of JavaScript at the space using split() method")
console.log(challenge.split(" "))

// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log("11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.")
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(companies.split(", "))

// 12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.")
console.log(challenge.replace("JavaScript", "Python"))

// 13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.")
console.log(challenge.charAt(15))

// 14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()")
console.log(challenge.charCodeAt("11"))

// 15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript")
console.log(challenge.indexOf("a"))

// 16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.")
console.log(challenge.lastIndexOf("a"))

// 17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction")
let string17 = "You cannot end a sentence with because because because is a conjunction"
console.log(string17.indexOf('because'))

// 18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'")
console.log(string17.lastIndexOf("because"))

// 19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'")
console.log(string17.search("because"))

// 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log("20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.")
console.log(' 30 Days Of JavaScript '.trim())

// 21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true")
console.log(challenge.startsWith("30"))

// 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true")
console.log(challenge.endsWith("pt"))

// 23 Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("23 Use match() method to find all the a’s in 30 Days Of JavaScript")
console.log(challenge.match(/a/gi))

// 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log("24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'")
console.log('30 Days of '.concat('JavaScript'))

// 25 Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("25 Use repeat() method to print 30 Days Of JavaScript 2 times")
console.log(challenge.repeat(2))

// Level 2

// 01 Using console.log() print out the following statement:
console.log("01 Using console.log() print out the following statement:")
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

// 02 Using console.log() print out the following quote by Mother Teresa:
console.log("02 Using console.log() print out the following quote by Mother Teresa:")
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

// 03 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("03 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.")
console.log(typeof('10') == typeof(10))
console.log(typeof(Number('10')) == typeof(10))

// 04 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log("04 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.")
console.log(parseFloat('9.8') == 10)
console.log(Math.ceil(parseFloat('9.8')) == 10)

// 05 Check if 'on' is found in both python and jargon
console.log("05 Check if 'on' is found in both python and jargon")
console.log('python'.includes('on') && 'jargon'.includes('on'))

// 06 I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("06 I hope this course is not full of jargon. Check if jargon is in the sentence.")
console.log('I hope this course is not full of jargon.'.includes('jargon'))

// 07 Generate a random number between 0 and 100 inclusively.
console.log('07 Generate a random number between 0 and 100 inclusively.')
let randomNum = Math.random()
let numBetweenZeroAndHundred = randomNum * 101
let randRoundToFloor = Math.floor(numBetweenZeroAndHundred)
console.log(randRoundToFloor)

// 08 Generate a random number between 50 and 100 inclusively.
console.log('08 Generate a random number between 50 and 100 inclusively.')
randomNum = Math.random()
let numBetweenZeroAndFifty = randomNum * 51
randRoundToFloor = Math.floor(numBetweenZeroAndFifty)
console.log(randRoundToFloor + 50)

// 09 Generate a random number between 0 and 255 inclusively.
console.log('09 Generate a random number between 0 and 255 inclusively.')
randomNum = Math.random()
let numBetweenZeroAnd255 = randomNum * 251
randRoundToFloor = Math.floor(numBetweenZeroAnd255)
console.log(randRoundToFloor)

// 10 Access the 'JavaScript' string characters using a random number.
console.log('10 Access the \'JavaScript\' string characters using a random number.')
let jsString = 'JavaScript'
let jsLen = jsString.length
randomNum = Math.random()
let randIndexJs = Math.floor(randomNum * jsLen)
console.log(jsString[randIndexJs])

// 11 Use console.log() and escape characters to print the following pattern.
console.log('11 Use console.log() and escape characters to print the following pattern.')
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

// 12 Use substr to slice out the phrase because because because from the 
// following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('12 Use substr to slice out the phrase because because because from the following sentence:\'You cannot end a sentence with because because because is a conjunction\'')
let becauseStr = 'You cannot end a sentence with because because because is a conjunction'
let becauseSearch = 'because because because'
console.log(becauseStr.substr(becauseStr.indexOf(becauseSearch), becauseSearch.length))

// Level 3

// 01 'Love is the best thing in this world. Some found their love and some are still looking for
// their love.' Count the number of word love in this sentence.
console.log('01 \'Love is the best thing in this world. Some found their love and some are still looking for their love.\' Count the number of word love in this sentence.')
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveSentence.match(/love/gi).length)

// 02 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('02 Use match() to count the number of all because in the following sentence:\'You cannot end a sentence with because because because is a conjunction\'')
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.match(/because/gi).length)

// 03 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
console.log('03 Clean the following text and find the most frequent word (hint, use replace and regular expressions).')
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
cleanSentence = sentence.replace(/[^a-zA-Z ]/g, "")
words = cleanSentence.split(' ')
console.log(cleanSentence)

// 04 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log("Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'")
let string04 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
incomes = (string04.match(/\d+/g))
console.log(incomes.reduce((a, b) => Number(a) + Number(b), 0))