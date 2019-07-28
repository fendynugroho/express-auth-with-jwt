const router = require('express').Router();

router.post('/register', (req, res) => {
	res.send('Register');
});

router.get('/login', (req, res) => {
	res.send('login cong');
});

module.exports = router;
