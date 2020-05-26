import models from '../models';

class AuthController {
    register(req, res) {
        // If any of these are not set, fail registration.
        if (!req.body.email || !req.body.pass || !req.body.confirmPass) {
            res.status(401).send({
                message: 'Either the email, or password fields were not set correctly',
                success: false
            });
        }

        // Check that the 2 password fields match
        if (req.body.pass !== req.body.confirmPass) {
            res.status(401).send({
                message: 'Passwords did not match',
                success: false
            });
        }

        // Insert into database;
        models.User.create({
            email: req.body.email,
            password: req.body.pass
        }).then(user => {
            return res.status(200).send({
                success: 'true',
                message: 'User created successfully',
                user
            });
        }).catch(err => {
            return res.status(401).send({
                success: false,
                message: 'Email already exists'
            });
        });
    }

    login(req, res) {
        console.log('TODO');
    }
}

const authController = new AuthController();
export default authController;