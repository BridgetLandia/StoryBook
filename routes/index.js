const express = require('express');
const router = express.Router();

//@dessc  Login/Landing page
//@route  GET/

router.get('/', (req, res) => {
	res.render('login', {
		layout: 'login'
	});
});

//@dessc  Dashboard
//@route  GET/dashboard

router.get('/dashboard', (req, res) => {
	res.render('dashboard');
});

module.exports = router;
