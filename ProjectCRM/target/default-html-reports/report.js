$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Announcement.feature");
formatter.feature({
  "name": "Announcement",
  "description": "  Agile Story: As a user, I should be able to send announcements from Announcement subheading from \"More\" under Activity Stream",
  "keyword": "Feature"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Portal\u003e but was:\u003c[(33) ]Portal\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_sees_title(LoginStepDefinitions.java:42)\r\n\tat ✽.the user sees title \"Portal\"(file:///C:/Users/admin/IdeaProjects/ProjectCRM/src/test/resources/features/Announcement.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on \"More\" tab under Activity Stream",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.Poll_Step_Definitions.user_clicks_on_tab_under_Activity_Stream(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Announcement\" tab under More",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.AnnouncementStepDefs.userClicksOnTabUnderMore(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User should be able to attach a link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LUE-705"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user clicks on Link  button on To line",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.AnnouncementStepDefs.user_clicks_on_Link_button_on_To_line()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Link popup is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.AnnouncementStepDefs.link_popup_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"www.duckduckgo.com\" to \"Link URL\" box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.Poll_Step_Definitions.user_enters_to_box(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user must click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.AnnouncementStepDefs.user_must_click_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Link text which is \"www.duckduckgo.com\" should be displayed on Announcement box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.AnnouncementStepDefs.link_text_which_is_should_be_displayed_on_Announcement_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FilterandSearch.feature");
formatter.feature({
  "name": "User should be able to see default filters as \"WORKFLOWS,ANNOUNCEMENTS,MY ACTIVITY,FAVORITES,and WORK\"",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@aa"
    }
  ]
});
formatter.background({
  "name": "Login as a hrUser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.AppreciationStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_enters_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on filter and search field",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.FilterandSearch_StepDef.the_user_click_on_filter_and_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be save filter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@aa"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User click SAVE FILTER button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.FilterandSearch_StepDef.user_click_SAVE_FILTER_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User wright \"TEAM ACTIVITY\" and click SAVE button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.FilterandSearch_StepDef.user_wright_and_click_SAVE_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check last filters",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.FilterandSearch_StepDef.user_check_last_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Poll.feature");
formatter.feature({
  "name": "Poll",
  "description": "  Agile Story: As a user, I should be able to create a poll by clicking on Poll tab under Active Stream",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LUE-683"
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Portal\u003e but was:\u003c[(33) ]Portal\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_sees_title(LoginStepDefinitions.java:42)\r\n\tat ✽.the user sees title \"Portal\"(file:///C:/Users/admin/IdeaProjects/ProjectCRM/src/test/resources/features/Poll.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Sending poll function",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LUE-683"
    },
    {
      "name": "@LUE-712"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user clicks on \"Poll\" tab under Activity Stream",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.Poll_Step_Definitions.user_clicks_on_tab_under_Activity_Stream(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user writes message to Message area box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.Poll_Step_Definitions.user_writes_message_to_Message_area_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"question\" to question box",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.Poll_Step_Definitions.user_enters_to_question_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"answer\" to answers box",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.Poll_Step_Definitions.user_enters_to_answers_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.MessageStepsDefinitions.user_clicks_on_Send_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "poll should be listed on Activity Stream",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.Poll_Step_Definitions.poll_should_be_listed_on_Activity_Stream()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TaskTab.feature");
formatter.feature({
  "name": "Task Tab",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
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
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_enters_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"Task\" by Quick Menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.EventTabStepDefinitions.navigate_to_by_Quick_Menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Task Tab_User clicks on the High Priority Check Box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LUE-692"
    },
    {
      "name": "@LUE-697"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user clicks on the High Priority Check Box",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.TaskTabStepDefs.the_user_clicks_on_the_High_Priority_Check_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the High Priority Check Box should be able to selected",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.TaskTabStepDefs.the_High_Priority_Check_Box_should_be_able_to_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Theme.feature");
formatter.feature({
  "name": "User should be able to change theme and notification settings.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Theme"
    }
  ]
});
formatter.background({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Background"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Portal\u003e but was:\u003c[(33) ]Portal\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bleuCRM.step_definitions.LoginStepDefinitions.the_user_sees_title(LoginStepDefinitions.java:42)\r\n\tat ✽.the user sees title \"Portal\"(file:///C:/Users/admin/IdeaProjects/ProjectCRM/src/test/resources/features/Theme.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User should be able to display Simple Mode and Advance Mode under Configure Notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Theme"
    },
    {
      "name": "@LUE-703"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "The User is on the Mainpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.ThemeStepDefinitions.the_User_is_on_the_Mainpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User clicks own username at the right top of page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.ThemeStepDefinitions.the_User_clicks_own_username_at_the_right_top_of_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User selects Configure Notifications on the opened list",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.ThemeStepDefinitions.the_User_selects_Configure_Notifications_on_the_opened_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User should be able to select Simple Mode or Advance Mode",
  "keyword": "And "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.ThemeStepDefinitions.the_User_should_be_able_to_select_Simple_Mode_or_Advance_Mode()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Only Simple Mode or Advance Mode should be selected",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bleuCRM.step_definitions.ThemeStepDefinitions.only_Simple_Mode_or_Advance_Mode_should_be_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});