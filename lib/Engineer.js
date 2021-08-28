const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;

        console.log(`Manager fired ${this.name}, ${this.id}, ${this.email}, ${this.gitHub}`);
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        console.log ("Role is Engineer");
        return "Engineer";};
}


module.exports = Engineer;