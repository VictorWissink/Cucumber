package Steps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.isOneOf;
import static org.mockito.Matchers.matches;

import com.github.kevinsawicki.http.HttpRequest;
import com.sun.org.apache.xpath.internal.operations.Bool;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import gherkin.deps.com.google.gson.JsonObject;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StepDefsIntegrationTest extends SpringIntegrationTest {

    private String previousUserID;

     @When("^the client calls /version$")
    public void the_client_issues_GET_version() throws Throwable {
        executeGet("/version");
    }

    @Then("^the client receives status code of (\\d+)$")
    public void the_client_receives_status_code_of(int statusCode) throws Throwable {
        //executeGet("sdf");
        assertThat("statuscode is not " + statusCode, latestResponse.code(), is(statusCode));
    }

    @And("^the client receives server version (.+)$")
    public void the_client_receives_server_version_body(String version) throws Throwable {
         assertThat("version is " + version, latestResponse.body(), is(version));
      //  executeGet("sdf");
    }

    @When("^the client posts Willem to /user/$")
    public void theClientPostsToUser() throws Throwable {
        // Write code herethat turns the phrase above into concrete actions
        JSONObject userWillem = new JSONObject();
        userWillem.put("name", "Willem");
        userWillem.put("age", "23");
        userWillem.put("salary", "20000");


        executePost("/user/", userWillem.toString().replace("\\\\","") );

    }

    @And("^the client receives userID$")
    public void theClientReceivesUserID() throws Throwable {
         //check if the returned location ends with an int
         Pattern userIDPattern = Pattern.compile(".*\\d+");
         Matcher matcher = userIDPattern.matcher(latestResponse.header("location"));
        Boolean matches = matcher.matches();
         assertThat("the response does not include an user ID, location: " + latestResponse.header("location"), matches);
    }



    @And("^the client can get the created user$")
    public void theClientCanGetTheCreatedUser() throws Throwable {
        String location = latestResponse.header("location");
        executeGetFullURL(location);
        assertThat("statuscode is 200", latestResponse.code(), is(200 ));
    }

    @When("^the client gets the created user$")
    public void theClientGetsTheCreatedUser() throws Throwable {
        String location = latestResponse.header("location");
        executeGetFullURL(location);
        JSONObject response = new JSONObject(latestResponse.body());
        previousUserID = response.get("id").toString();
        assertThat("statuscode is 200", latestResponse.code(), is(200 ));

    }


    @After("@cleanUpAfter")
    public void afterScenario() throws IOException {
//        HttpRequest.delete("http://localhost:8080/SpringBootCRUDApp/api/user/");

        executeDelete("/user/");
        assertThat("statuscode is not 204", latestResponse.code(), is(204));
    }


    @Given("^there are no users stored$")
    public void thereAreNoUsersStored() throws Throwable {
       // HttpRequest.delete("http://localhost:8080/SpringBootCRUDApp/api/user/");
        executeDelete("/user/");
        assertThat("statuscode is not 204", latestResponse.code(), is(204));
    }

    @When("^the client calls /user$")
    public void theClientCallsUser() throws Throwable {
        executeGet("/user/");

    }

    @And("^the client receives no body$")
    public void theClientReceivesNoBody() throws Throwable {
        latestResponse.body().isEmpty();
    }

    @Given("^there are three users stored$")
    public void thereAreThreeUsersStored() throws Throwable {
        JSONObject userWillem = new JSONObject();
        userWillem.put("name", "Willem");
        userWillem.put("age", "23");
        userWillem.put("salary", "20000");

        JSONObject userHenk = new JSONObject();
        userHenk.put("name", "Henk");
        userHenk.put("age", "53");
        userHenk.put("salary", "26000");

        JSONObject userSjors = new JSONObject();
        userSjors.put("name", "Sjors");
        userSjors.put("age", "23");
        userSjors.put("salary", "20900");
//        assertThat("this is some json", "some json", is(userSjors.toString()));

        executePost("/user/", userWillem.toString().replace("\\\\","") );
        assertThat("statuscode is not 201", latestResponse.code(), is(201));
        executePost("/user/", userHenk.toString().replace("\\\\","") );
        assertThat("statuscode is not 201", latestResponse.code(), is(201));
        executePost("/user/", userSjors.toString().replace("\\\\","") );
        assertThat("statuscode is not 201", latestResponse.code(), is(201));
    }

    @And("^the client receives three userObjects$")
    public void theClientReceivesThreeUserObjects() throws Throwable {
//        JSONArray bodyJSON = new JSONArray(latestResponse.body());
        JSONArray responseJSON = new JSONArray(latestResponse.body());
       assertThat("Resonse does not have three user objects", responseJSON.length(), is(3));

    }

    @And("^the client receives user \"([^\"]*)\"$")
    public void theClientReceivesUser(String name) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        JSONObject response = new JSONObject(latestResponse.body());

        assertThat("User is not " + name, response.get("name"), is(name) );

     }

    @When("^the client calls /user with id (\\d+)$")
    public void theClientCallsUserWithId(int id) throws Throwable {
        executeGet("/user/" + id);
    }

    @And("^the client receives an \"([^\"]*)\" message$")
    public void theClientReceivesAnMessage(String message) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String body = latestResponse.body();
        assertThat("there is no " + message + " message, instead theres: " + body, body.contains(message));
    }


    @And("^the client deletes the created user$")
    public void theClientDeletesTheCreatedUser() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        executeDelete("/user/" + previousUserID);
    }

    @And("^the client calls /user with previous id$")
    public void theClientCallsUserWithPreviousId() throws Throwable {
        executeGet("/user/" + previousUserID);
    }
}
