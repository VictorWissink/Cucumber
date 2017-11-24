Feature: User interface tests

  @web
 Scenario: Finding some cheese
   When I am on the CRUDExample page
   Then the page title should start with "crud example"


 @web
 Scenario Outline: Adding a User
   Given there are no users stored
   And I am on the CRUDExample page
   When I add User "<name>" "<age>" "<salary>"
   Then the page should display div with id "alert-success"
   And the user should be displayed

   Examples:
   | name   | age | salary |
   | Thomas | 32  | 23000  |
   | Gerard | 32  | 23000  |
   | Henker | 32  | 23000  |
   | hacker | 32  | 23000  |
   | El Quanto Serincho | 32  | 23000  |


 @web
 Scenario Outline: Add values and reset form
   Given I am on the CRUDExample page
   When I fill in user info "<name>" "<age>" "<salary>"
   And I click a button with id "reset"
   Then the textvalues of the form should be empty

   Examples:
     | name   | age | salary |
     | Thomas | 32  | 23000  |
     | Gerard | 32  | 23000  |
     | H | 32  | 23000  |
     | Ab | 89  | 29000  |
     | Prince-Fritz-Cruene-August-Willem-Jan-Hendrik-Dick | 32  | 23000  |
   
 @web
 Scenario Outline: Add entry and remove it
   Given there are no users stored
   And I am on the CRUDExample page
   When I add User "<name>" "<age>" "<salary>"
   And I click the remove button
   Then there should be no users stored

   Examples:
     | name   | age | salary |
     | Thomas | 32  | 23000  |
     | Thomas | 32  | 23000  |
     | Henker | 32  | 23000  |
     | hacker | 32  | 23000  |
     | El Quanto Serincho | 32  | 23000  |

 @web
 Scenario Outline: Add duplicate entry
   Given there are no users stored
   And I am on the CRUDExample page
   When I add User "<name>" "<age>" "<salary>"
   And I add User "<name>" "<age>" "<salary>"
   Then the page should display div with id "alert-danger"

   Examples:
     | name   | age | salary |
     | Thomas | 32  | 23000  |
     | Thomas | 32  | 23000  |
     | Henker | 32  | 23000  |
     | hacker | 32  | 23000  |
     | El Quanto Serincho | 32  | 23000  |




 @web
 Scenario Outline: Edit user
   Given there are no users stored
   And I am on the CRUDExample page
   When I add User "<name>" "<age>" "<salary>"
   And I click the edit button
   And I add User "<newName>" "<newAge>" "<newSalary>"
   Then the added user should be "<newName>" "<newAge>" "<newSalary>"

   Examples:
   |  name    | age   | salary   | newName | newAge | newSalary |
   |  Tom     | 43    | 10000    | Selders | 39     | 100003    |
   |  Mark    | 23    | 12000    | Rutte   | 54     | 100000    |


 @web
 Scenario Outline: Add duplicate entry should fail
   Given there are no users stored
   And I am on the CRUDExample page
   When I add User "<name>" "<age>" "<salary>"
   And I add User "<name>" "<age>" "<salary>"
   Then the page should display div with id "alert-nonexistend"

   Examples:
     | name   | age | salary |
     | Thomas | 32  | 23000  |
     | Thomas | 32  | 23000  |
     | Henker | 32  | 23000  |
     | hacker | 32  | 23000  |
     | El Quanto Serincho | 32  | 23000  |

 @web
 Scenario Outline: invalid variable reference should fail
   Given there are no users stored
   And I am on the CRUDExample page
   When I add User "<usernamename>" "<age>" "<salary>"
   And I add User "<name>" "<age>" "<salary>"
   Then the page should display div with id "alert-danger"

   Examples:
     | name   | age | salary |
     | Thomas | 32  | 23000  |
     | Thomas | 32  | 23000  |
     | Henker | 32  | 23000  |
     | hacker | 32  | 23000  |
     | El Quanto Serincho | 32  | 23000  |