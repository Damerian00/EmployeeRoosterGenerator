const Manager = require('../lib/Manager');

describe('Manager', () => {

    it('should return their role based on what was chosen', () => {
        expect(new Manager().getRole()).toBe("Manager");
        
    });

  });
  describe('officeNumber', () => {
    it('should set the OfficeNumber as a value in the object.', () => {
      const manager = new Manager("Mike" , "11A73", "y@nomail.com", "555-555-5555");
        expect(manager.officeNumber).toEqual("555-555-5555");
    });
});