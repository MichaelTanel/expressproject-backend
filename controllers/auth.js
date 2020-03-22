import models from '../models';

class AuthController {
    register(req, res) {
        // If any of these are not set, fail registration.
        if (!req.body.email || !req.body.pass || !req.body.confirmPass) {
            res.send({
                message: 'Either the email, or password fields were not set correctly',
                success: false
            });
        }

        // Check that the 2 password fields match
        if (req.body.pass !== req.body.confirmPass) {
            res.send({
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
        });
    }

    getAllUsers(req, res) {
        models.User.findAll().then(users => {
            return res.status(200).send({
                success: 'true',
                message: 'Retrieved all users',
                users
            })
        });
    }
}

const authController = new AuthController();
export default authController;