const Employee = require('../lib/Employee')
const manager = new Employee('Patrick', '0000', 'p4patrick@gmail.com');

describe('Employee', () => {
    it('Can instantiate Employee instance', () => {
        const employee = { "email": "p4patrick@gmail.com", "id": "0000", "name": "Patrick" };

        expect(manager).toEqual(employee);
    });

    it('Can set name via constructor arguments', () => {
        expect(manager.name).toEqual('Patrick');
    });

    it('Can set id via constructor argument', () => {
        expect(manager.id).toEqual('0000');
    });

    it('Can set email via constructor argument', () => {
        expect(manager.email).toEqual('p4patrick@gmail.com');
    });

    it('Can get name via getName()', () => {
        expect(manager.getName()).toEqual('Patrick');
    });

    it('Can get id via getId()', () => {
        expect(manager.getID()).toEqual('0000');
    });

    it('Can get email via getEmail()', () => {
        expect(manager.getEmail()).toEqual('p4patrick@gmail.com');
    });

    it('getRole() should return "Employee"', () => {
        expect(manager.getRole()).toEqual('Employee');
    });

});