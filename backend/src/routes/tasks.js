const express = require("express");
const router = express.Router();

// In-memory sample storage makes this practical easy to run without a database.
const tasks = [];
let nextId = 1;

router.get("/", (req, res) => res.status(200).json({ count: tasks.length, tasks }));

router.post("/", (req, res) => {
  const { title, description = "" } = req.body || {};
  if (typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "A non-empty title is required." });
  }
  const task = { id: String(nextId++), title: title.trim(),
    description: typeof description === "string" ? description.trim() : "" };
  tasks.push(task);
  return res.status(201).json({ message: "Task created", task });
});

module.exports = router;
