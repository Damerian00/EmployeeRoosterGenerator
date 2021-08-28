const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
                
        super(name, id, email);

        this.officeNumber = officeNumber;
        console.log(`Manager fired ${this.name}, ${this.id}, ${this.email}, ${this.officeNumber}`);
        
    }
    getNumber(){
        return this.officeNumber;
    }
    getRole(){
        console.log ("Role is Manager");
        return "Manager";
    }

}


module.exports = Manager;