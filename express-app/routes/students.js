const express = require('express');

const router = express.Router();


// get all
router.get('/', (req, res) => {
    res.send('get all route')
})

// get one
router.get('/:id', (req, res) => {

})

// create one
router.post('/', (req, res) => {

})


// update one
router.patch('/', (req, res) => {

})


// delete one
router.delete('/', (req, res) => {

})


module.exports = router