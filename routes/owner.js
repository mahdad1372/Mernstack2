const express = require('express');
const postcontrollers = require('../controllers/post');
const { check } = require('express-validator');
const authentication = require('../Middleware/verifyToken')
const router = express.Router();





router.post('/reserve' ,
[check('Tables').isNumeric().withMessage('you have to put the Number'),

check('Chaires').isNumeric().withMessage('you have to put the Number')] , postcontrollers.Owner);

router.post('/login/owner', authentication  ,postcontrollers.login);

router.post('/login/customer' ,authentication ,postcontrollers.login2);



router.post('/signup/owner',
[check('Name').not().isEmpty().withMessage('you have to put the Name'),

check('Email').isEmail().withMessage('you have to put the Email'),
check('Password').isNumeric().withMessage('you have to put the Number')],postcontrollers.register);


router.post('/signup/customer',
[check('Name').not().isEmpty().withMessage('you have to put the Name'),

check('Email').isEmail().withMessage('you have to put the Email'),
check('Password').isNumeric().withMessage('you have to put the Number')],postcontrollers.register2);


router.post('/reserve2' ,
[check('Customer').isNumeric().withMessage('you have to put the Number')],postcontrollers.customer);

module.exports = router;
