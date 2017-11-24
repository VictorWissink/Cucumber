Feature: get user with specific id

//  @cleanUpAfter
//  Scenario: client makes call to GET /user/ with id
//    Given there are no users stored
//    And the client posts Willem to /user/
//    And the client receives status code of 201
//    And the client receives userID
//    When the client gets the created user
//    Then the client receives status code of 200
//    And the client receives user "Willem"


   @cleanUpAfter
   Scenario: the client makes call to GET /user/ that is deleted
     Given there are no users stored
     When the client posts Willem to /user/
     And the client receives status code of 201
     And the client gets the created user
     And the client deletes the created user
     And the client receives status code of 204
     And the client calls /user with previous id
     Then the client receives status code of 404
     And the client receives an "not found" message

  @cleanUpAfter
  Scenario: the client makes call to GET /user/ with nonExistentID
    Given there are no users stored
    When the client calls /user with id 1
    Then the client receives status code of 404
    And the client receives an "not found" message