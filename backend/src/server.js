const express = require("express");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "task-api" });
});

app.use("/tasks", taskRoutes);
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Task API listening at http://localhost:${port}`));
}

module.exports = app;
