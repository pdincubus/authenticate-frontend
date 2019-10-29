const express = require('express')
const router = express.Router()

router.post('/v1/password-reset-check-code', function (req, res) {
    let userCode = req.session.data['password-reset-code'];

    if (parseInt(userCode) === 123456) {
        res.redirect('/v1/password-reset-new-password');
    } else {
        res.redirect('/v1/password-reset-invalid-code');
    }
});

module.exports = router
