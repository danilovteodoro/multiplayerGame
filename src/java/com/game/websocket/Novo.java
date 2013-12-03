/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.game.websocket;

import javax.websocket.OnMessage;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author danilo
 */
@ServerEndpoint("/endpoint")
public class Novo {

    @OnMessage
    public String onMessage(String message) {
        return null;
    }
    
}
