const Intern = require('../lib/Intern');

describe('Intern', () => {

    it('should return their role based on what was chosen', () => {
        expect(new Intern().getRole()).toBe("Intern");
        
    });

  });
  it('should return GitHub UserName that was entered', () => {
    expect(new Intern("Mike", "11A73", "y@nomail.com", "Ample Academy").getSchool()).toBe("Ample Academy");
  
  });
