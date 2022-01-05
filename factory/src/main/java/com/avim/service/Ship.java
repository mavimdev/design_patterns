package com.avim.service;

public class Ship implements Transport {

    @Override
    public String deliver() {
        return "Delivering by sea!";
    }
    
}
