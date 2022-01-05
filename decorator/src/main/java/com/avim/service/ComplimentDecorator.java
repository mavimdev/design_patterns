package com.avim.service;

public class ComplimentDecorator extends GreetingsDecorator {

    public ComplimentDecorator(Greetings wrapper) {
        super(wrapper);
    }

    @Override
    public String greets() {
        return super.greets() + ", how are you?";
    } 

}
