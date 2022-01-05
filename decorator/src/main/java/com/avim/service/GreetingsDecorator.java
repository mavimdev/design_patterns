package com.avim.service;

public class GreetingsDecorator implements Greetings {

    private Greetings wrapper;
    
    public GreetingsDecorator(Greetings wrapper) {
        this.wrapper = wrapper;
    }

    @Override
    public String greets() {
        return this.wrapper.greets();
    }
    
}
