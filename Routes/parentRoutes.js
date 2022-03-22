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
router.post('/',  async (req, res) => {
    const parent = new parents({
        name: req.body.name,
        child: req.body.child
    })
    try { 
         console.log(parent)
        const savedParent = await parent.save()
       res.json(savedParent)
    } catch (err) {
        res.json({ message: err })
    }
})

//delete parent by id
router.delete('/:id', async (req, res) => {
    try {
        const removedParent = await parents.remove({ _id: req.params.id })
        res.json(removedParent)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router