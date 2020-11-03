const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    studentid: { type: Number, required: true },
    phonenumber: { type: Number, required: true },
    status: { type: String, required: true },
  },
  {
    timestamp: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
