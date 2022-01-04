const Bug = require('../models/Bug')

exports.createBug = () => {
    resizeBy.status(200).json({
        success: true,
        data: 'create bugs'
    })
}

exports.updateBug = () => {
    resizeBy.status(200).json({
        success: true,
        data: 'update bugs'
    })
}

exports.deleteBug = () => {
    resizeBy.status(200).json({
        success: true,
        data: 'delete bugs'
    })
}

exports.getAllBugs = () => {
    resizeBy.status(200).json({
        success: true,
        data: 'get all bugs'
    })
}