const express = require("express");
const router = new express.Router();
const Student = require("../models/student");
// CREATE USER
router.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const user = new Student(req.body);
    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      res.status(400).send({
        message: "existing user",
      });
    } 
    const createUser = await user.save();
    res.status(200).send(createUser);

  } catch (e) {
    res.status(400).send(e);
  }
});
// GET THE USER VALUES

router.get("/students", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.status(200).send(studentData);
  } catch (e) {
    res.status(400).send(e);
  }
});
// GET THE USER VALUE USING BY THE ID

router.get("/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const existingUser = await Student.findById(studentId);
    if (!existingUser) {
      res.status(400).send({
        message: "id not found",
      });
    } else {
      res.status(200).send(existingUser);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
// UPDATE THE USER VALUE USING BY THE ID

router.patch("/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(studentId, req.body, {
      new: true,
    });
    res.status(200).send(updateStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});
// DELETE THE USER VALUE USING BY THE ID
router.delete("/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(studentId);
    if (!existingUser) {
      res.status(400).send({
        message: "id not found",
      });
    } else {
      res.status(200).send(deleteStudent);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
