$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Function",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@jenkins"
    },
    {
      "name": "@tst"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_enters_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sees title \"Portal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_sees_title(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Portal\u003e but was:\u003c[(1) ]Portal\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_sees_title(LoginStepDefinitions.java:43)\r\n\tat ✽.the user sees title \"Portal\"(file:///C:/Users/Selami%20Demiral/IdeaProjects/ProjectOpenlyCRM/ProjectCRM/src/test/resources/features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});