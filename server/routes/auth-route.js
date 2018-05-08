'user strinct';
const { Router } = require('express');
const router = Router();

const { register, login, logout } = require('../controllers/auth-ctrl');

router.post('/server/register', register);
router.post('/server/login', login);
router.post('/server/logout', logout);

// For checking if user is logged in.
router.get('/server/status', (req, res) => {
    let user = req.app.get("user");
    console.log('APP SERVER STATUS USER: ', user);
    if (!user) {
        console.log('not authed in get status route');
        return res.status(200).send(null);
    }
    res.status(200).send(user);
});

module.exports = router;