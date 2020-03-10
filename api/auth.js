import express from 'express';

let router = express.Router();

router.put('/register', (req, res) => {
    console.log('req body', req.body);
    // If any of these are not set, fail registration.
    // TODO: Install body parser
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

    res.send({
        message: 'Successfully registrated',
        success: true
    });
});

export default router;