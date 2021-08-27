const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    it('should return their role based on what was chosen', () => {
        expect(new Engineer().getRole()).toBe("Engineer");
        
    });

  });
  it('should return GitHub UserName that was entered', () => {
    expect(new Engineer("Mike", "11A73", "y@nomail.com", "JoJo981").getGitHub()).toBe("JoJo981");
  
  });
