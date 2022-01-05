package com.avim.service;

public interface Logistics {

    default void planDelivery() {
        Transport transport = this.createTransport();
        transport.deliver();
    }

    Transport createTransport();
    
}
