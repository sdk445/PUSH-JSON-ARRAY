const express = require('express')
const router = express.Router()
//import parent model from '../models/parentModel'
const parents = require('../models/parentModel')
//get parents 
router.get('/', async (req, res) => {
    try {
        console.log('parent get')
        const parent = await parents.find()
        res.json(parent)
    } catch (err) {
        res.json({ message: err })
    }
})
//get parent by id
router.get('/:id', async (req, res) => {
    try {
        const parent = await parents.findById(req.params.id)
        res.json(parent)
    } catch (err) {
        res.json({ message: err })
    }
})
//create parent 

router.post('/', async (req, res) => {
    var parent = new parents({
        name: req.body.name,
        child: req.body.child
    })
    
    
    try { 
        console.log('post parent')
        const savedParent = await parents.create(req.body)
       res.json(savedParent)
    } catch (err) {
        res.json({ message: err })
    }
})

//delete parent by id
router.delete('/:id', async (req, res) => {
    try {
        const removedParent = await parents.deleteOne({ _id: req.params.id })
        res.json(removedParent)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router