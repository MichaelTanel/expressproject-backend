import express from 'express';
import { setCredentials } from '../controllers/auth';

let router = express.Router();

router.put('/register', (req, res) => {
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

    // TODO: Run db query
    setCredentials(req.body.email, req.body.email);

    res.send({
        message: 'Successfully registrated',
        success: true
    });
});

export default router;