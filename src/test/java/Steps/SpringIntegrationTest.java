package Steps;


import com.github.kevinsawicki.http.HttpRequest;
import com.websystique.springboot.SpringBootCRUDApp;
import javafx.application.Application;
import org.junit.Assert;
import org.springframework.boot.test.context.SpringBootContextLoader;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static gherkin.deps.com.google.gson.internal.$Gson$Types.arrayOf;


//@WebAppConfiguration
//@SpringBootTest(classes = SpringBootCRUDApp.class, webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
//@ContextConfiguration(loader= SpringBootContextLoader.class)

//@SpringBootTest(classes=SpringBootCRUDApp.class, webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)


//@ContextConfiguration(locations = arrayOf("classpath:/testContext.xml"))
//@SpringBootTest(classes = SpringBootCRUDApp.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

@ContextConfiguration(
        classes = SpringBootCRUDApp.class,
        loader = SpringBootContextLoader.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class SpringIntegrationTest {

    static HttpRequest latestResponse = null;
    private String apiUrl = "http://localhost:8080/SpringBootCRUDApp/api";

    void executeGet(String url) throws IOException {
        latestResponse = HttpRequest.get(apiUrl + url);
    }


    void executePost(String url, String body) throws IOException {
              latestResponse = HttpRequest.post(apiUrl + url).contentType("application/json", "UTF-8").send(body);
            }

    void executeGetFullURL(String url) throws IOException {
        latestResponse = HttpRequest.get(url);
    }

    void executeDelete(String url) throws IOException {
                    latestResponse = HttpRequest.delete(apiUrl + url);
           }

}
