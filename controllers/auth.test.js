import { setCredentials } from './auth';

describe('register', () => {
    let email = 'test@gmail.com';
    let pass = 'password';

    test('Test setting credentials for a new user', () => {
        expect(setCredentials(email, pass)).toBe(true);
    });
});