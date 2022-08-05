const Engineer = require('../lib/Engineer')
const engineer = new Engineer('sbobspants');

describe('Engineer', () => {
    it('Can set GitHub account via constructor', () => {
        expect(engineer.gitHub).toEqual('sbobspants');
});

it('getRole() should return "Engineer"', () => {
    expect(engineer.getRole()).toEqual("Engineer");
});

it('Can get GitHub username via getGithub()', () => {
    expect(engineer.getGithub()).toEqual('sbobspants');
});
     
})