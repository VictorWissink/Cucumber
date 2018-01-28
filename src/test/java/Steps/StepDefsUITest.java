package Steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.StringStartsWith.startsWith;

public class StepDefsUITest extends SpringIntegrationTest {

    private final WebDriver driver = new ChromeDriver();

    @Before("@web")
    public void setupChromeDriver()
    {

    }
    @After("@web")
    public void TeardownChromeDriver()
    {

        driver.close();
    }



    @Then("^the page title should start with \"([^\"]*)\"$")
    public void thePageTitleShouldStartWith(String word) throws Throwable {

       (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
       public Boolean apply(WebDriver d) {
           return d.getTitle().toLowerCase().startsWith(word);
       }
       });

        assertThat(driver.getTitle().toLowerCase(), startsWith(word));
    }

    @Then("^the page should display div with id \"([^\"]*)\"$")
    public void thePageShouldDisplayDivWithId(String id) throws Throwable {
        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {

                WebElement element = driver.findElement(By.id(id));
                return element.isDisplayed();

            }
        });



    }

    @Given("^I am on the CRUDExample page$")
    public void iAmOnTheCRUDExamplePage() throws Throwable {
       driver.get("localhost:8060/SpringBootCRUDApp/");
    }

    @When("^I add User \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void iAddUser(String name, String age, String salary) throws Throwable {

        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
          public Boolean apply(WebDriver d) {

              WebElement uNameInput = d.findElement(By.id("uname"));
              WebElement ageInput = d.findElement(By.id("age"));
              WebElement salaryInput = d.findElement(By.id("salary"));


              uNameInput.clear();
              ageInput.clear();
              salaryInput.clear();

              uNameInput.sendKeys(name);
              ageInput.sendKeys(age);
              salaryInput.sendKeys(salary);

              WebElement addButton = d.findElement(By.id("submit"));
              return addButton.isEnabled();

          }
       });
        WebElement addButton = driver.findElement(By.id("submit"));
        addButton.click();



    }

    @When("^I fill in user info \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void iFillInUserInfo(String name, String age, String salary) throws Throwable {

        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {

                WebElement uNameInput = d.findElement(By.id("uname"));
                WebElement ageInput = d.findElement(By.id("age"));
                WebElement salaryInput = d.findElement(By.id("salary"));

                uNameInput.sendKeys(name);
                ageInput.sendKeys(age);
                salaryInput.sendKeys(salary);

                WebElement resetButton = d.findElement(By.id("reset"));
                return resetButton.isEnabled();

            }
        });
        
       




    }



    @And("^I click a button with id \"([^\"]*)\"$")
    public void iClickAButtonWithId(String id) throws Throwable {
        WebElement resetButton = driver.findElement(By.id(id));
        resetButton.click();
    }

    @Then("^the textvalues of the form should be empty$")
    public void theTextvaluesOfTheFormShouldBeEmpty() throws Throwable {
        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {

                WebElement uNameInput = d.findElement(By.id("uname"));
                WebElement ageInput = d.findElement(By.id("age"));
                WebElement salaryInput = d.findElement(By.id("salary"));


                assertThat("input username is not empty", uNameInput.getText().isEmpty());
                assertThat("input age is not empty", ageInput.getText().isEmpty());
                assertThat("input salary is not empty", salaryInput.getText().isEmpty());

                return true;

            }
        });




    }

    @And("^I click the remove button$")
    public void iClickTheRemoveButton() throws Throwable {
        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {


                return d.findElement(By.xpath("//button[contains(@class,'remove')]")).isDisplayed();

            }
        });


        driver.findElement(By.xpath("//button[contains(@class,'remove')]")).click();
    }

    @Then("^there should be no users stored$")
    public void thereShouldBeNoUsersStored() throws Throwable {
        String xPath = "/html[@class='ng-scope']/body/div[@class='ng-scope']/div[@class='generic-container ng-scope']/div[@class='panel panel-default'][2]/div[@class='panel-body']/div[@class='table-responsive']/table[@class='table table-hover']/tbody/tr[@class='ng-scope']/td[@class='ng-binding']";
        new WebDriverWait(driver, 10).until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(xPath)));
    }

    @And("^the user should be displayed$")
    public void theUserShouldBeDisplayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {
                String xPath = "/html[@class='ng-scope']/body/div[@class='ng-scope']/div[@class='generic-container ng-scope']/div[@class='panel panel-default'][2]/div[@class='panel-body']/div[@class='table-responsive']/table[@class='table table-hover']/tbody/tr[@class='ng-scope']/td[@class='ng-binding']";
                return d.findElement(By.xpath(xPath)).isDisplayed();
            }
        });

    }

    @And("^I click the edit button$")
    public void iClickTheEditButton() throws Throwable {

        String xPath = "/html[@class='ng-scope']/body/div[@class='ng-scope']/div[@class='generic-container ng-scope']/div[@class='panel panel-default'][2]/div[@class='panel-body']/div[@class='table-responsive']/table[@class='table table-hover']/tbody/tr[@class='ng-scope']/td[5]/button[@class='btn btn-success custom-width edit']";

        new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xPath)));

         driver.findElement(By.xpath(xPath)).click();



    }

    @Then("^the added user should be \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void theAddedUserShouldBe(String name, String age, String salary) throws Throwable {
        String xPath       = "/html[@class='ng-scope']/body/div[@class='ng-scope']/div[@class='generic-container ng-scope']/div[@class='panel panel-default'][2]/div[@class='panel-body']/div[@class='table-responsive']/table[@class='table table-hover']/tbody/tr[@class='ng-scope']/td[@class='ng-binding']";
        String xPathName   = "[2]";
        String xPathAge    = "[3]";
        String xPathSalary = "[4]";

       new WebDriverWait(driver, 10).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xPath)));

        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {

               String newName   = d.findElement(By.xpath(xPath + xPathName)).getText();
               String newAge    = d.findElement(By.xpath(xPath + xPathAge)).getText();
               String newSalary = d.findElement(By.xpath(xPath + xPathSalary)).getText();


               assertThat("username does not have the correct value", name.equals(newName));
               assertThat("age does not have the correct value", age.equals(newAge));
               assertThat("salary does not have the correct value", salary.equals(newSalary));

               return true;


            }
        });





    }



}
