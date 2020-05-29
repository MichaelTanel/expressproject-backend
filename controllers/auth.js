import models from '../models';

class AuthController {
    register(req, res) {
        let validationResult = this.validateRegisterCredentials(req.body.email, req.body.pass, req.body.confirmPass);

        // If the validationResult has a message in it, send the error http response code and message.
        if (validationResult) {
            return res.status(401).send({
                success: false,
                message: validationResult
            });
        }

        if (createDatabaseUser(req.body.email, req.body.pass)) {
            return res.status(200).send({
                success: 'true',
                message: 'User created successfully',
                user
            });
        } else {
            // TODO handle email already existing vs server error.
            return res.status(401).send({
                success: false,
                message: 'Email already exists'
            });
        }
    }

    createDatabaseUser(email, pass) {
        // Insert into database;
        models.User.create({
            email: email,
            password: pass
        }).then(user => {
            return true;
        }).catch(err => {
            return false;
        });
    }

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

    login(req, res) {
        // Check that the email and password are set.
        if (!req.query.email || !req.query.pass) {
            return res.status(400).send({
                success: false,
                message: 'Username/password is invalid'
            });
        }

        // Query to find the user entry with that username and password
        models.User.findOne({ 
            where: {
                email: req.query.email,
                password: req.query.pass
            }
        }).then(result => {
            // If the result is null, the login failed.
            if (!result) {
                return res.status(401).send({
                    success: false,
                    message: 'Invalid credentials'
                })
            }

            return res.status(200).send({
                success: true,
                message: 'Login successful'
            });
        }).catch(err => {
            return res.status(500).send({
                success: false,
                message: err
            })
        });
    }
}

const authController = new AuthController();
export default authController;