package com.avim.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.avim.service.RoadLogistics;
import com.avim.service.SeaLogistics;
import com.avim.service.Transport;

@Path("/deliver")
public class DeliverController {

    @GET
    @Path("/sea")
    @Produces(MediaType.TEXT_PLAIN)
    public String sea() {
        Transport transport = new SeaLogistics().createTransport();
        return transport.deliver();
    }

    @GET
    @Path("/road")
    @Produces(MediaType.TEXT_PLAIN)
    public String road() {
        Transport transport = new RoadLogistics().createTransport();
        return transport.deliver();
    }
    
}