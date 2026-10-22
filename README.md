# AWDF Practical 12 — GitHub Actions CI Pipeline

## Run locally
Requirements: Node.js 18+ and npm.

```powershell
cd backend
npm install
npm test
```

Tests run against an in-memory Express app; MongoDB is not required.

## Demonstrate a failed test
1. Open `backend/tests/health.test.js`.
2. Change `expect(response.statusCode).toBe(200)` to `toBe(201)`.
3. Run `npm test`; the health test should fail because `/health` returns HTTP 200.
4. To demonstrate CI failure in your practice repository, commit and push the broken test to `main`.
5. Open GitHub → Actions and wait until the run finishes.

## Fix and demonstrate recovery
Restore the expected status to 200, run `npm test`, then commit and push the fix. Check GitHub → Actions for a green run.

Use a dedicated practice repository when deliberately pushing a failing test. Don't push broken code to a production repository.
