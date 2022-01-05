package com.avim;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class GreetingResourceTest {

    @Test
    public void testSeaEndpoint() {
        given()
          .when().get("/deliver/sea")
          .then()
             .statusCode(200)
             .body(is("Delivering by sea!"));
    }

    @Test
    public void testRoadEndpoint() {
        given()
          .when().get("/deliver/road")
          .then()
             .statusCode(200)
             .body(is("Delivering by road!"));
    }

}