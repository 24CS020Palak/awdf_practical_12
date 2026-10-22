# Viva Answers — Practical 12

1. CI automatically checks code changes.
2. GitHub Actions runs workflows based on repository events.
3. Workflow files are stored in `.github/workflows/`.
4. This workflow runs on pushes to `main` and pull requests targeting `main`.
5. `npm install` installs dependencies from `package.json`.
6. `npm test` runs automated tests and provides a pass/fail exit status.
7. The broken test expected 201, but `/health` returns 200.
8. Restoring the assertion to 200 fixes the test.
9. A green check means the workflow succeeded.
10. A red cross means a workflow step failed.
