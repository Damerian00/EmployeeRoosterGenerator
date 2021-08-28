const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

        console.log(`Manager fired ${this.name}, ${this.id}, ${this.email}, ${this.school}`);
    }
    getSchool(){
        
        return this.school;
    }
    getRole(){
        console.log ("Role is Intern");
        return "Intern";};
}


module.exports = Intern;