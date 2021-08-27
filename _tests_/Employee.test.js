const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should create an object with a name', () => {
      const employee = new Employee("Mike" , "11A73", "y@nomail.com");
        expect(employee.name).toEqual("Mike");
        expect(employee.id).toEqual("11A73");
        expect(employee.email).toEqual("y@nomail.com");
    });
  
    it('should return name of the employee that was entered', () => {
      expect(new Employee("Mike").getName()).toBe('Mike');
    
    });
    it('should return id of the employee that was entered', () => {
        expect(new Employee("Mike", "11A73", "y@nomail.com").getId()).toBe("11A73");
      
      });
    it('should return Email of the employee that was entered', () => {
    expect(new Employee("Mike", "11A73", "y@nomail.com").getEmail()).toBe("y@nomail.com");
    
    });
    it('should return their role based on what was chosen', () => {
        expect(new Employee("Employee").getRole()).toBe("Employee");
        
    });
  
//  
//   describe('Init', () => {
//     it('should return the number if not a multiple of three or five', () => {
//       expect(fizzBuzz([1])).toBe('1');
     
//     });
  
 
  
  });