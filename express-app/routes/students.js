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
router.get('/:id', getStudent, (req, res) => {

    res.send(res.student);
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
router.patch('/:id', getStudent, async (req, res) => {

    if (req.body.name != null) {
        res.student.name = req.body.name;
    }

    if (req.body.faculty_number != null) {
        res.student.faculty_number = req.body.faculty_number;
    }

    if (req.body.email != null) {
        res.student.email = req.body.email;
    }

    try {
        const updatedStudent = await res.student.save();
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// delete one
router.delete('/:id', getStudent, async (req, res) => {

    try {
        await res.student.remove();
        res.json({ message: 'Deleted Student' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})


async function getStudent(req, res, next) {

    try {
        student = await Student.findById(req.params.id);
        if (student == null) {
            return res.status(404).json({ message: 'Cannot find Student' })                   // 404 student not found
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })                               // 500 server error
    }

    res.student = student;
    next();
}


module.exports = router