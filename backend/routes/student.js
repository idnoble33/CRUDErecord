// //Tell server to use the files created

// const router = require('express').Router();
// let Register = require('../models/registration.model');

// router.route('/').get((req, res) =>{
//   Register.find()
//      .then(registers => res.json(registers))
//      .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const studentid = Number(req.body.studentid);
//   const phonenumber = Number(req.body.phonenumber);
//   const status = req.body.status


//   const newRegister = new Register({
//     firstname,
//     lastname,
//     studentid,
//     phonenumber,
//     status
//   });

//     newRegister.save()
//       .then(() => res.json('Student Registeration added'))
//       .catch(err => res.status(400).json('Error: ' + err));
// })

// router.route('/:id').get((req, res) => {
//   Register.findById(req.params.id)
//     .then(register => res.json(register))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req,res) => {
//   Register.findByIdAndDelete(req.params.id)
//   .then(() =>res.json('Student Registeration deleted.'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Register.findById(req.params.id)
//     .then(register => {
//       register.firstname = req.body.firstname;
//       register.lastname = req.body.lastname;
//       register.studentid = Number(req.body.studentid);
//       register.phonenumber = Number(req.body.phonenumber);
//       register.status = req.body.status;

//       register.save()
//         .then(() => res.json('Student Registeration updated'))
//         .catch(err => res.status(400).json('Error: ' + err))
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// module.exports = router

//Tell server to use the files created

// const router = require('express').Router();
// let Student = require('../models/student.model');

// router.route('/').get((req, res) =>{
//   Student.find()
//      .then(students => res.json(students))
//      .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const studentid = Number(req.body.studentid);
//   const phonenumber = Number(req.body.phonenumber);
//   const status = req.body.status


//   const newStudent = new Student({
//     firstname,
//     lastname,
//     studentid,
//     phonenumber,
//     status
//   });

//     newStudent.save()
//       .then(() => res.json('Student added'))
//       .catch(err => res.status(400).json('Error: ' + err));
// })

// router.route('/:id').get((req, res) => {
//   Student.findById(req.params.id)
//     .then(student => res.json(student))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req,res) => {
//   Student.findByIdAndDelete(req.params.id)
//   .then(() =>res.json('Student deleted.'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Student.findById(req.params.id)
//     .then(student => {
//       register.firstname = req.body.firstname;
//       register.lastname = req.body.lastname;
//       register.studentid = Number(req.body.studentid);
//       register.phonenumber = Number(req.body.phonenumber);
//       register.status = req.body.status;

//       student.save()
//         .then(() => res.json('Student updated'))
//         .catch(err => res.status(400).json('Error: ' + err))
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// module.exports = router