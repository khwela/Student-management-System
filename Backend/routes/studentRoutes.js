const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  res.json(await Student.find());
});

router.put("/:id", async (req, res) => {
  res.json(
    await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

module.exports = router;
