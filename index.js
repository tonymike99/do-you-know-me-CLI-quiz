var readLineSync = require('readline-sync');

console.log(`Welcome to the "Do you know me?" CLI quiz`);

var username = readLineSync.question('Please enter your name: ');
console.log('Hello ' + username + '! Nice to meet you!\n');

console.log("Let's begin the quiz!\n");

let game = [
    {
        question: 'What is my name? ',
        answer: 'Tony',
    },
    {
        question: 'How old am I? ',
        answer: '22',
    },
    {
        question: 'Where do I live? ',
        answer: 'Bangalore',
    },
    {
        question: 'Which is my favourite sport? ',
        answer: 'Football',
    },
    {
        question: 'Which is my favourite food? ',
        answer: 'Biriyani',
    },
];

function play(game) {
    let score = 0;

    for (let round of game) {
        var userAnswer = readLineSync.question(round['question']);
        if (userAnswer.toUpperCase() === round['answer'].toUpperCase()) {
            console.log('Correct!');
            score++;
        } else console.log('Wrong! The correct answer is ' + round['answer']);

        console.log('Current score: ' + score + '\n');
    }

    return score;
}

console.log(
    'You have answered ' +
        play(game) +
        ' out of ' +
        game.length +
        ' questions correctly, ' +
        username
);

let highScore = [{name: 'James', score: 5}];

console.log(
    "\nCheck out the high scores. If you should be there, ping me and I'll update it"
);
for (let item of highScore) {
    console.log(item.name + ' : ' + item.score);
}
