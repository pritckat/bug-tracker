const Bug = require('../models/Bug')

exports.createBug = async (req, res, next) => {
    const bug = await Bug.create(req.body)
    res.status(201).json({
        success: true,
        data: bug
    })

}

exports.updateBug = async (req, res, next) => {
    let bug = await Bug.findById(req.params.id)

    if (!bug) {
        return 'bug not found'
    }

    bug = await Bug.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

    res.status(201).json({
        status: true,
        data: bug,
    })
}

exports.deleteBug = async (req, res, next) => {
    let bug = await Bug.findById(req.params.id)

    if (!bug) {
        return 'bug not found'
    }

    bug = await Bug.remove()

    res.status(201).json({
        status: true,
        data: {},
    })
}

exports.getAllBugs = async (req, res, next) => {
    let bugs = await Bug.find()
    res.status(200).json({
        status: true,
        data: bugs
    })
}