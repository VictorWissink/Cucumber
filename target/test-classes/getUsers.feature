Feature: get list of users


  Scenario: client makes call to GET /user/ with no users stored
    Given there are no users stored
    When the client calls /user
    Then the client receives status code of 204
    And the client receives no body


  @cleanUpAfter
  Scenario: the client makes call to GET /user/ with three users stored
    Given there are three users stored
    When the client calls /user
    Then the client receives status code of 200
    And the client receives three userObjects
