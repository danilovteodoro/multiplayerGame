/*
     * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.game.model;

import java.io.StringReader;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;



/**
 *
 * @author danilo
 */
public class ObjDecoder  implements Decoder.Text<Obj>{

    @Override
    public Obj decode(String s) throws DecodeException {
        
        JsonObject jsonObject=Json.createReader(new StringReader(s)).readObject();
        return new Obj(jsonObject);
    }

    @Override
    public boolean willDecode(String s) {
        try {
            Json.createReader(new StringReader(s)).readObject();
       return true;
        } catch (Exception e) {
            
            return false;
        }
    }

    @Override
    public void init(EndpointConfig config) {
        System.out.println("Decoder init");
    }

    @Override
    public void destroy() {
        System.out.println("Decoder destroy");
    }
    
}
