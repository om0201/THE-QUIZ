var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
console.log(chalk.bold.rgb(106, 0, 255)('HOW WELL DO YOU KNOW ME\n'));

const player = readlineSync.question(chalk.rgb(0, 183, 255)("What is your name? "))
console.log(chalk.rgb(255, 187, 0)('\nWelcome ' + chalk.rgb(0, 132, 255).bold(player) + ' to HOW WELL DO YOU KNOW ME ?\n'))

function quiz(question, answer) {
	var userAns = readlineSync.question(question)
	if(userAns == answer) {
		console.log(chalk.rgb(0, 255, 21)('RIGHT ANSWER'))
		score++;
	} else {
		console.log(chalk.rgb(255, 0, 0)('WRONG ANSWER'))
	}
	console.log(chalk.rgb(255, 247, 0)('Your current score is: ' + score));
	console.log('-------------------------\n')
}

// Questions and answers
let questions = [questionOne = {
	question: ('1) What is my name? '),
	answer: 'omang'
	},
	questionTwo = {
	question: '2) What is my age?',
	answer: 19
	},
	questionThree = {
	question: '3) Where do I live?',
	answer: 'uran'
	},
	questionFour = {
	question: '4) What is my college name?',
	answer: 'icl'
	},
	questionFive = {
	question: '5) What is my school name?',
	answer: 'ues'
	}
]

// for loop
for(i = 0; i < questions.length; i++) {
	currentQuestion = questions[i];
	quiz(chalk.rgb(137, 136, 138)(currentQuestion.question), currentQuestion.answer); 
}

console.log(chalk.rgb(255, 136, 0)('Your final score is ' + score + '\n'))

var highScores = [
	user1 = {
		name: 'Rahul',
		score: 5
	},
	user2 = {
		name: 'Lila',
		score: 4
	},
	user3 = {
		name: 'Vijay',
		score: 4
	}

]


console.log(chalk.rgb(195, 255, 0)("*****HIGHSCORES*****"))

for(i = 0; i < highScores.length; i++) {
	var currentHighScore = highScores[i]
	console.log(chalk.rgb(129, 31, 194)((i + 1) + ' ' + currentHighScore.name + '		' + currentHighScore.score))
}

console.log('\n==============================\n')

if(score == 5) {
	console.log(chalk.bgYellow('You achieved the high score'.toUpperCase()))
	console.log(chalk.red('Send me a screenshot on twitter at @omang_webdev to update your name on the list.'))
}
