import { submitForm } from '../client/js/formSubmit'

describe('Test function sumbitForm' , () => {
    test('It is defined', async () => {
        expect(submitForm).toBeDefined();
    });
});

describe('Test, submit form is a function ' , () => {
    test('It should be a function', async () => {
        expect(typeof submitForm).toBe("function");
    });
});