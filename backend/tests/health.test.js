const request = require("supertest");
const app = require("../src/server");

describe("GET /health", () => {
  test("returns HTTP 200 and a clear health status", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "ok", service: "task-api" });
  });
});
