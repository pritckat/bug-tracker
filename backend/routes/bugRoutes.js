const express = require('express')
const bugController = require('../controllers/bugController')
const router = express.Router()

// @route - /api/v1/bugs
router.route('/').get(bugController.getAllBugs).post(bugController/bugController.createBug)

// @route - /api/v1/bugs/:id
router.route('/:id').put(bugController.updateBug).delete(bugController.deleteBug)