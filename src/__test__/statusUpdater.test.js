import { updateStatus } from '../client/js/statusUpdater'

describe('Test function updateStatus' , () => {
    test('It is defined', async () => {
        expect(updateStatus).toBeDefined();
    });
});

describe('Test, updateStatus is a function ' , () => {
    test('It should be a function', async () => {
        expect(typeof updateStatus).toBe("function");
    });
});