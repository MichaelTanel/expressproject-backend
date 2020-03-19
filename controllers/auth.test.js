import authController from './auth';

describe('register', () => {
    let email = 'test@gmail.com';
    let pass = 'password';

    // TODO: update db
    test('Set credentials for a new user', () => {
        expect(authController.setCredentials(email, pass)).toBe(true);
    });
});