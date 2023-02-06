const express = require('express');

const router = express.Router();

const Student = require('../models/student');

// get all
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).jsong({ message: err.message })         // 500 error on the server 
    }
})

// get one
router.get('/:id', (req, res) => {

})

// create one
router.post('/', async (req, res) => {

    const student = new Student({
        name: req.body.name,
        faculty_number: req.body.faculty_number,
        email: req.body.email,
        date_of_creation: req.body.date_of_creation
    })

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);              // 201 successfully created an object
    } catch (err) {
        res.status(400).json({ message: err.message })                             // 400 bad data 
    }
})


// update one
router.patch('/', (req, res) => {

})


// delete one
router.delete('/', (req, res) => {

})


module.exports = router