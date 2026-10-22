const request = require("supertest");
const app = require("../src/server");

describe("Task API", () => {
  test("POST /tasks rejects a missing title", async () => {
    const response = await request(app).post("/tasks").send({ description: "No title" });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("A non-empty title is required.");
  });

  test("POST /tasks creates a task", async () => {
    const response = await request(app).post("/tasks")
      .send({ title: "Finish practical", description: "Configure CI" });
    expect(response.statusCode).toBe(201);
    expect(response.body.task.title).toBe("Finish practical");
    expect(response.body.task.id).toBeDefined();
  });
});
