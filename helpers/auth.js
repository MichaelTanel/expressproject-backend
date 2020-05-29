import models from '../models';

class AuthHelper {
    /**
     * Validate that the email, password and password confirmation are all set and valid.
     * @param {*} email User's email
     * @param {*} pass User's password
     * @param {*} confirmPass Confirmation of the user's password
     */
    validateRegisterCredentials(email, pass, confirmPass) {
        // If any of these are not set, fail registration.
        if (!email || !pass || !confirmPass) {
            return 'Email or password fields were not set correctly';
        }

        // Check that the 2 password fields match
        if (pass !== confirmPass) {
            return 'Passwords did not match';
        }
    }
}

const authHelper = new AuthHelper();
export default authHelper;