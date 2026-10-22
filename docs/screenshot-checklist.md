# Practical 12 Screenshot Checklist

1. VS Code project structure: `.github/workflows`, `backend/src`, `backend/tests`.
2. Open `.github/workflows/ci.yml`, showing push/pull-request triggers, `npm install`, and `npm test`.
3. Run `npm test` in `backend` and capture the passing tests.
4. Push the initial project to GitHub; capture a completed green Actions run.
5. Change health test expected status from 200 to 201; run `npm test` and capture the failure.
6. Push the broken test to a practice repo and capture the completed failed Actions run.
7. Restore expected status to 200, test again, push the fix, and capture the green recovery run.

Wait for each workflow to finish before capturing its final status.
