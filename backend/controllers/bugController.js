const Bug = require('../models/Bug')

exports.createBug = async (req, res, next) => {
    const bug = await Bug.create(req.body)
    res.status(201).json({
        success: true,
        data: bug
    })

}

exports.updateBug = (req, res, next) => {
    res.send('update bug')

}

exports.deleteBug = (req, res, next) => {
    res.send('delete bug')

}

exports.getAllBugs = (req, res, next) => {
    res.send('get all bugs')
}