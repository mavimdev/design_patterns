package com.avim.service;

public class NameDecorator extends GreetingsDecorator {

    public NameDecorator(Greetings wrapper) {
        super(wrapper);
    }

    @Override
    public String greets() {
        return super.greets() + " " + "Miguel";
    } 

}
