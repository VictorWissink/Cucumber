package Steps;


import com.github.kevinsawicki.http.HttpRequest;
import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/html/"},
        features="src/test/resources/"
        )
public class CucumberIntegrationTest {

}


