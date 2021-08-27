const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
let choicesArray = [];


init();

function init(){
    askQuestions();
}

function askQuestions (){
    const questions = [
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee name you wish to add?",
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is their id#?",
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is their email address?",
        },
        {
            type: 'list',
            name: 'role',
            message: 'Choose their Role :',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
           type: 'input',
           name: 'officeNumber',
           message: 'Please enter their work number.',
           when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter their Git Hub username.',
            when: (answers) => answers.role === 'Engineer'
         },
         {
            type: 'input',
            name: 'school',
            message: 'Please enter the school they are attending.',
            when: (answers) => answers.role === 'Intern'
         },
        {
            type: 'confirm',
            name: 'addMore',
            message: "Do you wish to add anyone else?",
        }   
      
    ];
    inquirer.prompt(questions).then((answers) => {
       choicesArray.push(answers);
        moreQuestions(answers);  
 });
}

function moreQuestions(answers){
    console.log("I got fired")
    if (answers.addMore === true){
        console.log("time to evaluate")
        askQuestions();}else{
            let fileName = "index.html";
            let newAnswers = choicesArray;
            writeToFile(fileName, newAnswers);    

        }
        console.log(choicesArray);
}


function writeToFile (fileName, answers){

    const readMeString = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Rooster</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <h1>Hello ${answers.employeeName}</h1>






<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="assets/js/script.js"></script>
</body>
</html>
`;
fs.writeFile(fileName, readMeString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}