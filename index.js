const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
let choicesArray = [];
let employeeName;
let employeeId;
let employeeEmail;
let employeeRole;
let employeeSpec;
let cdCont = "";

init();

function init(){
    askQuestions();
}

function askQuestions (){
    const questions = [
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name you wish to add?",
            validate(value) {
            const fails = value.match(
              /([0-9 ])/i
            );
            if (fails || value === "") {
                return 'Please only use letters';
             
            }
                return true;
          },
          filter(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name you wish to add?",
            validate(value) {
            const fails = value.match(
              /([0-9])/i
            );
            if (fails || value === "") {
                return 'Please only use letters';
             
            }
                return true;
          },
          filter(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          },
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is their id#?",
            validate (val) {
                if (val === "" || val.length < 3){return "Please enter a valid ID"}
                else {return true;}
            },
            filter(val) {
                return val.toUpperCase();
              },
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is their email address?",
            validate(value) {
                const pass = value.match(
                  /(.com)/i
                );
                if (pass) {
                  return true;
                }
          
                return 'Please enter a valid email address';
              },
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
           message: 'Please enter their office number.',
           validate (val) {
            if (val === "" || val.length > 3){return "Please enter a valid Office Number that is less then 3 digits"}
            else {return true;}
        },
        filter(val) {
            return val.toUpperCase();
          },
         when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter their Git Hub username.',
            validate (val) {
              if (val === "" || val.length < 3){return "Please enter a valid ID"}
              else {return true;}
          },
          filter(val) {
              return val.toUpperCase();
            },
            when: (answers) => answers.role === 'Engineer'
         },
         {
            type: 'input',
            name: 'school',
            message: 'Please enter the school they are attending.',
            validate (val) {
              if (val === "" || val.length < 3){return "Please enter a valid ID"}
              else {return true;}
          },
          filter(val) {
              return val.toUpperCase();
            },
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
    let name = `${answers.firstName} ${answers.lastName}`
    let employee;
    if (answers.role === "Manager"){
         employee = new Manager(name, answers.employeeId , answers.employeeEmail, answers.officeNumber)
        employeeSpec = employee.getNumber();
    } else if (answers.role === "Engineer"){
        employee = new Engineer(name,answers.employeeId , answers.employeeEmail, answers.gitHub)
        employeeSpec = employee.getGitHub();
    } else {
        employee = new Intern(name,answers.employeeId , answers.employeeEmail, answers.school)
        employeeSpec = employee.getSchool();
    }
    
    employeeName = employee.getName();
    employeeId = employee.getId();
    employeeEmail = employee.getEmail();
    employeeRole = employee.getRole();

    if (answers.addMore === true){
        askQuestions();
    
    }else{
        createCards(); 
        writeToFile();

    }
}


function writeToFile (){
    
    let path = "./output/"
    let fileName = "index.html";
    let filePath = path + fileName;
    let cssPath = `${path}styles.css`;
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
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class ="row bg-danger">
    <h1 class = "text-center p-4 w-100 text-light">My Team</h1>
    </header>
        <main id="cardContainer" class = "row justify-content-center">
            ${cdCont}   
        </main>




 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
 <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 <script src="../index.js"></script>
    </body>
 </html>
 `;

 fs.writeFile(filePath, readMeString, (err) => {
     if (err) throw err;
     console.log('The file has been saved!');
   });
   const cssFile = `
   body{
    min-width: 280px;
}
header{
    padding: 2vh 0;
}
#cardContainer{
    margin: 10vh auto;
    justify-content: center;
    width: 55vw;
}
.card {
    min-width: 256px;
    width:16rem;
    margin: 1vh .5vw;
    box-shadow: 6px 1px rgb(2 24 24 / 50%);
    border-radius: 12px;
}
.card > div {
    border-radius:12px 12px 0 0px;
}
   
   
   `;
   fs.writeFile(cssPath, cssFile, (err) => {
    if (err) throw err;
  });
  }

/* create the cards */
function createCards(){
  for (let i = 0; i < choicesArray.length; i++) {
      const el = choicesArray[i];
      let icond;
      let spec;
      if (el.role === "Manager"){
          icond = "👔";
          spec = `Office Number: ${el.officeNumber}`
      } else if (el.role === "Engineer"){
          icond = "🛠";
          spec = `GitHub: <a href="https://github.com/${el.gitHub}" target = "_blank"> ${el.gitHub}</a>`;
      } else {
          icond = "🏫"
          spec = `School: ${el.school}`;
      }
      cdCont += `
      <div class="card">
             <div class="bg-primary p-2">
              <h5 class="card-title text-light">${el.firstName} ${el.lastName}</h5>
              <h6 class="card-subtitle mb-2 text-light">${icond} ${el.role}</h6>
              </div>
              <div class="card-body">
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${el.employeeId}</li>
                      <li class="list-group-item"><a href="mailto:${el.employeeEmail}">${el.employeeEmail}</a></li>
                      <li class="list-group-item">${spec}</li>
                    </ul>
              </div>
            </div>
         
      `;
      
  }  
    
}
