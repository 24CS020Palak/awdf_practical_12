// Simple task shape for the practical. The sample API uses in-memory storage.
class Task {
  constructor({ id, title, description = "" }) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
module.exports = Task;
