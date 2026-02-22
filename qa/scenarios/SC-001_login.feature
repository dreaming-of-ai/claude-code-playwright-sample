Feature: Login Page Access Control
  The application must be protected by a code-based login page.
  Only users entering the correct passcode may access protected pages.

  Background:
    Given I navigate to "http://localhost:4321"

  Scenario: Intentionally failing
    Given I am on the login page
    When I enter passcode "1711"
    And I submit the login form
    Then I should remain on the login page
    And I should see an error message
    And the passcode input should be empty

  Scenario: Successful login with correct passcode
    Given I am on the login page
    When I enter passcode "1711"
    And I submit the login form
    Then I should be redirected to "/home"
    And I should see the heading "Thomas Jaspers"

  Scenario: Login rejected with incorrect passcode
    Given I am on the login page
    When I enter passcode "0000"
    And I submit the login form
    Then I should remain on the login page
    And I should see an error message
    And the passcode input should be empty

  Scenario: Direct navigation to protected page without session
    Given I have no active session
    When I navigate directly to "/services"
    Then I should be redirected to the login page

  Scenario: Session persists across page navigation
    Given I have logged in with passcode "1711"
    When I navigate to "/services"
    And I navigate to "/contact"
    Then I should not be redirected to the login page
