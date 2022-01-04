const Bug = require('../models/Bug')

exports.createBug = (req, res, next) => {
    res.send('create bug')

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