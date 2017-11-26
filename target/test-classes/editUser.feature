Feature: the user can be edited


  @cleanUpAfter
  Scenario Outline: client makes call to POST /user/
    When the client posts Willem to /user/
    And the client receives status code of 201
    And the client receives userID
    And the client gets the created user
    Then the client can edit the created user with "<name>" "<age>" "<salary>"
    And the client receives status code of 200

    Examples:
    | name | age | salary |
    | Henk | 23  | 392232 |
    | Sjors | 24 | 2342   |
    | Willem | 23 | 3242  |