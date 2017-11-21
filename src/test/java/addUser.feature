Feature: the user can be added
  @cleanUpAfter
  Scenario: client makes call to POST /user/
    When the client posts Willem to /user/
    Then the client receives status code of 201
    And the client receives userID
    And the client can get the created user

  @cleanUpAfter
  Scenario: client makes call to POST duplicate /user/
    Given the client posts Willem to /user/
    And the client receives status code of 201
    When the client posts Willem to /user/
    Then the client receives status code of 409
    And the client receives an "error" message