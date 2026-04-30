const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

const valid = require('../middlewares/validation.middleware');
const { createUserSchema } = require('../validations/user.validation');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', valid.validate(createUserSchema), userController.createUser);
router.delete('/delete/:id', userController.deleteUserById);
router.put('/update/:id', valid.validate(createUserSchema), userController.updateUserById);

module.exports = router;