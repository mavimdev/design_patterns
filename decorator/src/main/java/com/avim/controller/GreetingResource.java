package com.avim.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.avim.service.ComplimentDecorator;
import com.avim.service.Greetings;
import com.avim.service.HelloGreetings;
import com.avim.service.NameDecorator;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        Greetings greetings = new HelloGreetings();
        greetings = new NameDecorator(greetings);
        greetings = new ComplimentDecorator(greetings);
        return greetings.greets();
    }

    public static void main(String[] args) {
        System.out.println(new GreetingResource().hello());
    }

}