/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.game.model;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;


/**
 *
 * @author danilo
 */
public class ObjEncoder implements Encoder.Text<Obj>{

    @Override
    public String encode(Obj object) throws EncodeException {
        return object.getJson().toString();
    }

    @Override
    public void init(EndpointConfig config) {
       
        System.out.println("Init");
    }

    @Override
    public void destroy() {
        System.out.println("Destroy");
    }
    
}
