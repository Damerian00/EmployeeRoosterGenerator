const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(gitHub){
        this.gitHub = gitHub;
    super(name, id, email);

    }
    getGitHub(){
        
    }
    getRole(){return "Engineer";};
}



module.exports = Engineer;