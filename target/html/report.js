$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("seleniumTests.feature");
formatter.feature({
  "line": 1,
  "name": "User interface tests",
  "description": "",
  "id": "user-interface-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2597802436,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Finding some cheese",
  "description": "",
  "id": "user-interface-tests;finding-some-cheese",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the CRUDExample page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the page title should start with \"crud example\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 787587051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crud example",
      "offset": 34
    }
  ],
  "location": "StepDefsUITest.thePageTitleShouldStartWith(String)"
});
formatter.result({
  "duration": 18829639,
  "status": "passed"
});
formatter.after({
  "duration": 51429310,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Adding a User",
  "description": "",
  "id": "user-interface-tests;adding-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add User \"\u003cname\u003e\" \"\u003cage\u003e\" \"\u003csalary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the page should display div with id \"alert-success\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user should be displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-interface-tests;adding-a-user;",
  "rows": [
    {
      "cells": [
        "name",
        "age",
        "salary"
      ],
      "line": 18,
      "id": "user-interface-tests;adding-a-user;;1"
    },
    {
      "cells": [
        "Thomas",
        "32",
        "23000"
      ],
      "line": 19,
      "id": "user-interface-tests;adding-a-user;;2"
    },
    {
      "cells": [
        "Gerard",
        "32",
        "23000"
      ],
      "line": 20,
      "id": "user-interface-tests;adding-a-user;;3"
    },
    {
      "cells": [
        "Henker",
        "32",
        "23000"
      ],
      "line": 21,
      "id": "user-interface-tests;adding-a-user;;4"
    },
    {
      "cells": [
        "hacker",
        "32",
        "23000"
      ],
      "line": 22,
      "id": "user-interface-tests;adding-a-user;;5"
    },
    {
      "cells": [
        "El Quanto Serincho",
        "32",
        "23000"
      ],
      "line": 23,
      "id": "user-interface-tests;adding-a-user;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2642998662,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Adding a User",
  "description": "",
  "id": "user-interface-tests;adding-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add User \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the page should display div with id \"alert-success\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 48985037,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 414668293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 944340161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-success",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 606334200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theUserShouldBeDisplayed()"
});
formatter.result({
  "duration": 41457212,
  "status": "passed"
});
formatter.after({
  "duration": 65173494,
  "status": "passed"
});
formatter.before({
  "duration": 2095792279,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Adding a User",
  "description": "",
  "id": "user-interface-tests;adding-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add User \"Gerard\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the page should display div with id \"alert-success\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 15701882,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 424666621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gerard",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 444419989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-success",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 607765411,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theUserShouldBeDisplayed()"
});
formatter.result({
  "duration": 56296566,
  "status": "passed"
});
formatter.after({
  "duration": 65261685,
  "status": "passed"
});
formatter.before({
  "duration": 2129791990,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Adding a User",
  "description": "",
  "id": "user-interface-tests;adding-a-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add User \"Henker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the page should display div with id \"alert-success\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 5841164,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 424194873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 937737965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-success",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 52952894,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theUserShouldBeDisplayed()"
});
formatter.result({
  "duration": 42030456,
  "status": "passed"
});
formatter.after({
  "duration": 60018094,
  "status": "passed"
});
formatter.before({
  "duration": 2142926056,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Adding a User",
  "description": "",
  "id": "user-interface-tests;adding-a-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add User \"hacker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the page should display div with id \"alert-success\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 4104705,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 379608764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hacker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 440292476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-success",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 50126585,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theUserShouldBeDisplayed()"
});
formatter.result({
  "duration": 36313977,
  "status": "passed"
});
formatter.after({
  "duration": 2316441246,
  "status": "passed"
});
formatter.before({
  "duration": 2569135268,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Adding a User",
  "description": "",
  "id": "user-interface-tests;adding-a-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add User \"El Quanto Serincho\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the page should display div with id \"alert-success\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 5319618,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 403076057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "El Quanto Serincho",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 33
    },
    {
      "val": "23000",
      "offset": 38
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 494910744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-success",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 611653058,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theUserShouldBeDisplayed()"
});
formatter.result({
  "duration": 46945610,
  "status": "passed"
});
formatter.after({
  "duration": 58586504,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Add values and reset form",
  "description": "",
  "id": "user-interface-tests;add-values-and-reset-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the CRUDExample page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I fill in user info \"\u003cname\u003e\" \"\u003cage\u003e\" \"\u003csalary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click a button with id \"reset\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the textvalues of the form should be empty",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "user-interface-tests;add-values-and-reset-form;",
  "rows": [
    {
      "cells": [
        "name",
        "age",
        "salary"
      ],
      "line": 34,
      "id": "user-interface-tests;add-values-and-reset-form;;1"
    },
    {
      "cells": [
        "Thomas",
        "32",
        "23000"
      ],
      "line": 35,
      "id": "user-interface-tests;add-values-and-reset-form;;2"
    },
    {
      "cells": [
        "Gerard",
        "32",
        "23000"
      ],
      "line": 36,
      "id": "user-interface-tests;add-values-and-reset-form;;3"
    },
    {
      "cells": [
        "H",
        "32",
        "23000"
      ],
      "line": 37,
      "id": "user-interface-tests;add-values-and-reset-form;;4"
    },
    {
      "cells": [
        "Ab",
        "89",
        "29000"
      ],
      "line": 38,
      "id": "user-interface-tests;add-values-and-reset-form;;5"
    },
    {
      "cells": [
        "Prince-Fritz-Cruene-August-Willem-Jan-Hendrik-Dick",
        "32",
        "23000"
      ],
      "line": 39,
      "id": "user-interface-tests;add-values-and-reset-form;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2118012727,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Add values and reset form",
  "description": "",
  "id": "user-interface-tests;add-values-and-reset-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the CRUDExample page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I fill in user info \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click a button with id \"reset\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the textvalues of the form should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 375711234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 21
    },
    {
      "val": "32",
      "offset": 30
    },
    {
      "val": "23000",
      "offset": 35
    }
  ],
  "location": "StepDefsUITest.iFillInUserInfo(String,String,String)"
});
formatter.result({
  "duration": 294853724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reset",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iClickAButtonWithId(String)"
});
formatter.result({
  "duration": 59805598,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theTextvaluesOfTheFormShouldBeEmpty()"
});
formatter.result({
  "duration": 85258340,
  "status": "passed"
});
formatter.after({
  "duration": 65076180,
  "status": "passed"
});
formatter.before({
  "duration": 2119514263,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Add values and reset form",
  "description": "",
  "id": "user-interface-tests;add-values-and-reset-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the CRUDExample page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I fill in user info \"Gerard\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click a button with id \"reset\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the textvalues of the form should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 424260256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gerard",
      "offset": 21
    },
    {
      "val": "32",
      "offset": 30
    },
    {
      "val": "23000",
      "offset": 35
    }
  ],
  "location": "StepDefsUITest.iFillInUserInfo(String,String,String)"
});
formatter.result({
  "duration": 800068425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reset",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iClickAButtonWithId(String)"
});
formatter.result({
  "duration": 68320257,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theTextvaluesOfTheFormShouldBeEmpty()"
});
formatter.result({
  "duration": 80610042,
  "status": "passed"
});
formatter.after({
  "duration": 42584694,
  "status": "passed"
});
formatter.before({
  "duration": 2107829654,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Add values and reset form",
  "description": "",
  "id": "user-interface-tests;add-values-and-reset-form;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the CRUDExample page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I fill in user info \"H\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click a button with id \"reset\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the textvalues of the form should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 423147219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H",
      "offset": 21
    },
    {
      "val": "32",
      "offset": 25
    },
    {
      "val": "23000",
      "offset": 30
    }
  ],
  "location": "StepDefsUITest.iFillInUserInfo(String,String,String)"
});
formatter.result({
  "duration": 787802588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reset",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iClickAButtonWithId(String)"
});
formatter.result({
  "duration": 65646003,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theTextvaluesOfTheFormShouldBeEmpty()"
});
formatter.result({
  "duration": 82490193,
  "status": "passed"
});
formatter.after({
  "duration": 45233099,
  "status": "passed"
});
formatter.before({
  "duration": 2155208999,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Add values and reset form",
  "description": "",
  "id": "user-interface-tests;add-values-and-reset-form;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the CRUDExample page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I fill in user info \"Ab\" \"89\" \"29000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click a button with id \"reset\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the textvalues of the form should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 412931074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ab",
      "offset": 21
    },
    {
      "val": "89",
      "offset": 26
    },
    {
      "val": "29000",
      "offset": 31
    }
  ],
  "location": "StepDefsUITest.iFillInUserInfo(String,String,String)"
});
formatter.result({
  "duration": 791055409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reset",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iClickAButtonWithId(String)"
});
formatter.result({
  "duration": 58551912,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theTextvaluesOfTheFormShouldBeEmpty()"
});
formatter.result({
  "duration": 77686039,
  "status": "passed"
});
formatter.after({
  "duration": 69980690,
  "status": "passed"
});
formatter.before({
  "duration": 2111946142,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Add values and reset form",
  "description": "",
  "id": "user-interface-tests;add-values-and-reset-form;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the CRUDExample page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I fill in user info \"Prince-Fritz-Cruene-August-Willem-Jan-Hendrik-Dick\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click a button with id \"reset\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the textvalues of the form should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 446009336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prince-Fritz-Cruene-August-Willem-Jan-Hendrik-Dick",
      "offset": 21
    },
    {
      "val": "32",
      "offset": 74
    },
    {
      "val": "23000",
      "offset": 79
    }
  ],
  "location": "StepDefsUITest.iFillInUserInfo(String,String,String)"
});
formatter.result({
  "duration": 432365128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reset",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iClickAButtonWithId(String)"
});
formatter.result({
  "duration": 60697777,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.theTextvaluesOfTheFormShouldBeEmpty()"
});
formatter.result({
  "duration": 79104704,
  "status": "passed"
});
formatter.after({
  "duration": 45062038,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Add entry and remove it",
  "description": "",
  "id": "user-interface-tests;add-entry-and-remove-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add User \"\u003cname\u003e\" \"\u003cage\u003e\" \"\u003csalary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I click the remove button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "there should be no users stored",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "user-interface-tests;add-entry-and-remove-it;",
  "rows": [
    {
      "cells": [
        "name",
        "age",
        "salary"
      ],
      "line": 50,
      "id": "user-interface-tests;add-entry-and-remove-it;;1"
    },
    {
      "cells": [
        "Thomas",
        "32",
        "23000"
      ],
      "line": 51,
      "id": "user-interface-tests;add-entry-and-remove-it;;2"
    },
    {
      "cells": [
        "Thomas",
        "32",
        "23000"
      ],
      "line": 52,
      "id": "user-interface-tests;add-entry-and-remove-it;;3"
    },
    {
      "cells": [
        "Henker",
        "32",
        "23000"
      ],
      "line": 53,
      "id": "user-interface-tests;add-entry-and-remove-it;;4"
    },
    {
      "cells": [
        "hacker",
        "32",
        "23000"
      ],
      "line": 54,
      "id": "user-interface-tests;add-entry-and-remove-it;;5"
    },
    {
      "cells": [
        "El Quanto Serincho",
        "32",
        "23000"
      ],
      "line": 55,
      "id": "user-interface-tests;add-entry-and-remove-it;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2108510097,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Add entry and remove it",
  "description": "",
  "id": "user-interface-tests;add-entry-and-remove-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add User \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I click the remove button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "there should be no users stored",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 4687833,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 373648238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 929253337,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iClickTheRemoveButton()"
});
formatter.result({
  "duration": 673547882,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.thereShouldBeNoUsersStored()"
});
formatter.result({
  "duration": 39572499,
  "status": "passed"
});
formatter.after({
  "duration": 83702064,
  "status": "passed"
});
formatter.before({
  "duration": 2119849542,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Add entry and remove it",
  "description": "",
  "id": "user-interface-tests;add-entry-and-remove-it;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add User \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I click the remove button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "there should be no users stored",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 3198081,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 413770413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 428537922,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iClickTheRemoveButton()"
});
formatter.result({
  "duration": 684185217,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.thereShouldBeNoUsersStored()"
});
formatter.result({
  "duration": 31434936,
  "status": "passed"
});
formatter.after({
  "duration": 40433507,
  "status": "passed"
});
formatter.before({
  "duration": 2116505869,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Add entry and remove it",
  "description": "",
  "id": "user-interface-tests;add-entry-and-remove-it;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add User \"Henker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I click the remove button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "there should be no users stored",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 2898154,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 395211052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 915108491,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iClickTheRemoveButton()"
});
formatter.result({
  "duration": 695693823,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.thereShouldBeNoUsersStored()"
});
formatter.result({
  "duration": 26530046,
  "status": "passed"
});
formatter.after({
  "duration": 2314789177,
  "status": "passed"
});
formatter.before({
  "duration": 2215167031,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Add entry and remove it",
  "description": "",
  "id": "user-interface-tests;add-entry-and-remove-it;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add User \"hacker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I click the remove button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "there should be no users stored",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 4262081,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 404087979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hacker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 415854317,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iClickTheRemoveButton()"
});
formatter.result({
  "duration": 663910683,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.thereShouldBeNoUsersStored()"
});
formatter.result({
  "duration": 30808092,
  "status": "passed"
});
formatter.after({
  "duration": 70208011,
  "status": "passed"
});
formatter.before({
  "duration": 2132971444,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Add entry and remove it",
  "description": "",
  "id": "user-interface-tests;add-entry-and-remove-it;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add User \"El Quanto Serincho\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I click the remove button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "there should be no users stored",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 4008530,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 392861813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "El Quanto Serincho",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 33
    },
    {
      "val": "23000",
      "offset": 38
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 495953456,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iClickTheRemoveButton()"
});
formatter.result({
  "duration": 632934952,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.thereShouldBeNoUsersStored()"
});
formatter.result({
  "duration": 31994495,
  "status": "passed"
});
formatter.after({
  "duration": 60569671,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "Add duplicate entry",
  "description": "",
  "id": "user-interface-tests;add-duplicate-entry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I add User \"\u003cname\u003e\" \"\u003cage\u003e\" \"\u003csalary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I add User \"\u003cname\u003e\" \"\u003cage\u003e\" \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the page should display div with id \"alert-danger\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "user-interface-tests;add-duplicate-entry;",
  "rows": [
    {
      "cells": [
        "name",
        "age",
        "salary"
      ],
      "line": 66,
      "id": "user-interface-tests;add-duplicate-entry;;1"
    },
    {
      "cells": [
        "Thomas",
        "32",
        "23000"
      ],
      "line": 67,
      "id": "user-interface-tests;add-duplicate-entry;;2"
    },
    {
      "cells": [
        "Thomas",
        "32",
        "23000"
      ],
      "line": 68,
      "id": "user-interface-tests;add-duplicate-entry;;3"
    },
    {
      "cells": [
        "Henker",
        "32",
        "23000"
      ],
      "line": 69,
      "id": "user-interface-tests;add-duplicate-entry;;4"
    },
    {
      "cells": [
        "hacker",
        "32",
        "23000"
      ],
      "line": 70,
      "id": "user-interface-tests;add-duplicate-entry;;5"
    },
    {
      "cells": [
        "El Quanto Serincho",
        "32",
        "23000"
      ],
      "line": 71,
      "id": "user-interface-tests;add-duplicate-entry;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2152075921,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Add duplicate entry",
  "description": "",
  "id": "user-interface-tests;add-duplicate-entry;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I add User \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I add User \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the page should display div with id \"alert-danger\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 2369005,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 396000213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 495763769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 213161436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-danger",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 587757732,
  "status": "passed"
});
formatter.after({
  "duration": 45853481,
  "status": "passed"
});
formatter.before({
  "duration": 2097483882,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Add duplicate entry",
  "description": "",
  "id": "user-interface-tests;add-duplicate-entry;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I add User \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I add User \"Thomas\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the page should display div with id \"alert-danger\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 3266886,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 396870344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 414259648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 214426527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-danger",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 35991622,
  "status": "passed"
});
formatter.after({
  "duration": 44904662,
  "status": "passed"
});
formatter.before({
  "duration": 2148974395,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Add duplicate entry",
  "description": "",
  "id": "user-interface-tests;add-duplicate-entry;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I add User \"Henker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I add User \"Henker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the page should display div with id \"alert-danger\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 5995499,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 413061460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 422674711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 195669875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-danger",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 41971156,
  "status": "passed"
});
formatter.after({
  "duration": 2311985296,
  "status": "passed"
});
formatter.before({
  "duration": 2221324469,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Add duplicate entry",
  "description": "",
  "id": "user-interface-tests;add-duplicate-entry;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I add User \"hacker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I add User \"hacker\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the page should display div with id \"alert-danger\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 5871955,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 392644375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hacker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 444176702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hacker",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 21
    },
    {
      "val": "23000",
      "offset": 26
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 212256713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-danger",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 41740033,
  "status": "passed"
});
formatter.after({
  "duration": 75575906,
  "status": "passed"
});
formatter.before({
  "duration": 2222924079,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Add duplicate entry",
  "description": "",
  "id": "user-interface-tests;add-duplicate-entry;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I add User \"El Quanto Serincho\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I add User \"El Quanto Serincho\" \"32\" \"23000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the page should display div with id \"alert-danger\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 4172368,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 401633823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "El Quanto Serincho",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 33
    },
    {
      "val": "23000",
      "offset": 38
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 989096569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "El Quanto Serincho",
      "offset": 12
    },
    {
      "val": "32",
      "offset": 33
    },
    {
      "val": "23000",
      "offset": 38
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 264287778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alert-danger",
      "offset": 37
    }
  ],
  "location": "StepDefsUITest.thePageShouldDisplayDivWithId(String)"
});
formatter.result({
  "duration": 37052200,
  "status": "passed"
});
formatter.after({
  "duration": 2311127330,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 75,
  "name": "Edit user",
  "description": "",
  "id": "user-interface-tests;edit-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I add User \"\u003cname\u003e\" \"\u003cage\u003e\" \"\u003csalary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I click the edit button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I add User \"\u003cnewName\u003e\" \"\u003cnewAge\u003e\" \"\u003cnewSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the added user should be \"\u003cnewName\u003e\" \"\u003cnewAge\u003e\" \"\u003cnewSalary\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "user-interface-tests;edit-user;",
  "rows": [
    {
      "cells": [
        "name",
        "age",
        "salary",
        "newName",
        "newAge",
        "newSalary"
      ],
      "line": 84,
      "id": "user-interface-tests;edit-user;;1"
    },
    {
      "cells": [
        "Tom",
        "43",
        "10000",
        "Selders",
        "39",
        "100003"
      ],
      "line": 85,
      "id": "user-interface-tests;edit-user;;2"
    },
    {
      "cells": [
        "Mark",
        "23",
        "12000",
        "Rutte",
        "54",
        "100000"
      ],
      "line": 86,
      "id": "user-interface-tests;edit-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2129337727,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Edit user",
  "description": "",
  "id": "user-interface-tests;edit-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I add User \"Tom\" \"43\" \"10000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I click the edit button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I add User \"Selders\" \"39\" \"100003\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the added user should be \"Selders\" \"39\" \"100003\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 4401970,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 377892072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 12
    },
    {
      "val": "43",
      "offset": 18
    },
    {
      "val": "10000",
      "offset": 23
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 423345649,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iClickTheEditButton()"
});
formatter.result({
  "duration": 662227063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selders",
      "offset": 12
    },
    {
      "val": "39",
      "offset": 22
    },
    {
      "val": "100003",
      "offset": 27
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 218288325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selders",
      "offset": 26
    },
    {
      "val": "39",
      "offset": 36
    },
    {
      "val": "100003",
      "offset": 41
    }
  ],
  "location": "StepDefsUITest.theAddedUserShouldBe(String,String,String)"
});
formatter.result({
  "duration": 727888270,
  "error_message": "java.lang.AssertionError: salary does not have the correct value\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:26)\r\n\tat Steps.StepDefsUITest$8.apply(StepDefsUITest.java:228)\r\n\tat Steps.StepDefsUITest$8.apply(StepDefsUITest.java:218)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat Steps.StepDefsUITest.theAddedUserShouldBe(StepDefsUITest.java:218)\r\n\tat ✽.Then the added user should be \"Selders\" \"39\" \"100003\"(seleniumTests.feature:81)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 73503406,
  "status": "passed"
});
formatter.before({
  "duration": 2129184534,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Edit user",
  "description": "",
  "id": "user-interface-tests;edit-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "there are no users stored",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I am on the CRUDExample page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I add User \"Mark\" \"23\" \"12000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I click the edit button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I add User \"Rutte\" \"54\" \"100000\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the added user should be \"Rutte\" \"54\" \"100000\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsIntegrationTest.thereAreNoUsersStored()"
});
formatter.result({
  "duration": 3819983,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iAmOnTheCRUDExamplePage()"
});
formatter.result({
  "duration": 403484704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 12
    },
    {
      "val": "23",
      "offset": 19
    },
    {
      "val": "12000",
      "offset": 24
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 454702657,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsUITest.iClickTheEditButton()"
});
formatter.result({
  "duration": 685930040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rutte",
      "offset": 12
    },
    {
      "val": "54",
      "offset": 20
    },
    {
      "val": "100000",
      "offset": 25
    }
  ],
  "location": "StepDefsUITest.iAddUser(String,String,String)"
});
formatter.result({
  "duration": 210803454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rutte",
      "offset": 26
    },
    {
      "val": "54",
      "offset": 34
    },
    {
      "val": "100000",
      "offset": 39
    }
  ],
  "location": "StepDefsUITest.theAddedUserShouldBe(String,String,String)"
});
formatter.result({
  "duration": 745894155,
  "error_message": "java.lang.AssertionError: salary does not have the correct value\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:26)\r\n\tat Steps.StepDefsUITest$8.apply(StepDefsUITest.java:228)\r\n\tat Steps.StepDefsUITest$8.apply(StepDefsUITest.java:218)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat Steps.StepDefsUITest.theAddedUserShouldBe(StepDefsUITest.java:218)\r\n\tat ✽.Then the added user should be \"Rutte\" \"54\" \"100000\"(seleniumTests.feature:81)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2312655096,
  "status": "passed"
});
});