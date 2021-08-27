const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;

        super(name, id, email);
    }
    getSchool(){

    };    
    getRole(){return "Intern";}
}



module.exports = Intern;