const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Users Routes
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route('/:id')
    .get(userController.getsingleUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
