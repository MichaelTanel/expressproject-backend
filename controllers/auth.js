import models from '../models';
import authHelper from '../helpers/auth';

class AuthController {
    register(req, res) {
        let validationResult = authHelper.validateRegisterCredentials(req.body.email, req.body.pass, req.body.confirmPass);

        // If the validationResult has a message in it, send the error http response code and message.
        if (validationResult) {
            return res.status(401).send({
                success: false,
                message: validationResult
            });
        }

        if (authHelper.createDatabaseUser(req.body.email, req.body.pass)) {
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