package com.avim.service;

public class Truck implements Transport {

    @Override
    public String deliver() {
        return "Delivering by road!";
    }

}
