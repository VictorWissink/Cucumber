package Steps;


import com.github.kevinsawicki.http.HttpRequest;
import nl.ovsoftware.oldenzaal.testprototypes.cucumber.SpringBootCRUDApp;
import org.springframework.boot.test.context.SpringBootContextLoader;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;

import java.io.IOException;


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

    void executePut(String url, String body) throws IOException {
        latestResponse = HttpRequest.put(apiUrl + url).contentType("application/json", "UTF-8").send(body);;
    }

}
