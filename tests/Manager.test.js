const Manager = require('../lib/Manager')
const manager = new Manager('1111')

describe('Manager', () => {
    it('Can set office number via constructor argument', () => {
      expect(manager.officeNumber).toEqual('1111');
});

it('getRole() should return "Manager"', () => {
    expect(manager.getRole()).toEqual('Manager');
});

it('Can get office number via getOffice()', () => {
    expect(manager.getOffice()).toEqual('1111');
});
    
})