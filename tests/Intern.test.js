const Intern = require('../lib/Intern')
const intern = new Intern('UofM')

describe('Intern', () => {
    it('Can set school via constructor', () => {
      expect(intern.school).toEqual('UofM');
});

it('getRole() should return "Intern"', () => {
    expect(intern.getRole()).toEqual('Intern');
});

it('Can get school via getSchool()', () => {
    expect(intern.getSchool()).toEqual('UofM');
});
     
})