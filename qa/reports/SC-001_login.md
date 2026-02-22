# Test Report
Date: 2026-02-21
Feature: SC-001_login.feature
Environment: http://localhost:4321

| # | Scenario | Status | Notes |
|---|---|---|---|
| 1 | Intentionally failing | ❌ FAIL | Correct passcode "1711" causes redirect to /home; scenario expected to remain on login page |
| 2 | Successful login with correct passcode | ✅ PASS | Redirected to /home; heading "Thomas Jaspers" visible |
| 3 | Login rejected with incorrect passcode | ✅ PASS | Remained on login page; error message displayed; input cleared |
| 4 | Direct navigation to protected page without session | ✅ PASS | /services redirected to login page |
| 5 | Session persists across page navigation | ✅ PASS | Navigated /services → /contact without redirect |

## Summary
- **Total:** 5
- **Passed:** 4
- **Failed:** 1

## Failed Scenarios
### Intentionally failing
- **Step failed:** Then I should remain on the login page
- **Expected:** After entering passcode "1711" and submitting, the user should remain on the login page, see an error message, and the passcode input should be empty
- **Observed:** The correct passcode "1711" was accepted; the browser redirected to /home showing the portfolio homepage with heading "Thomas Jaspers". No error message was displayed and no passcode input was present.
- **Screenshot:** reports/SC-001_scenario1_intentionally_failing.png
- **Reproduction steps:**
  1. Navigate to http://localhost:4321
  2. Enter "1711" in the Access Code field
  3. Click the "Enter" button
  4. Observe: page redirects to /home instead of remaining on login page
