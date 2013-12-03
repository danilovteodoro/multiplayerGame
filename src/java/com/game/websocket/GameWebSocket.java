    /*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.game.websocket;

import com.game.model.Obj;
import com.game.model.ObjDecoder;
import com.game.model.ObjEncoder;
import java.io.IOException;
import java.io.StringWriter;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonString;
import javax.json.JsonValue;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author danilo
 */
@ServerEndpoint(value="/game",encoders = {ObjEncoder.class},decoders = {ObjDecoder.class})
public class GameWebSocket {
      
    private static Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());
    private static Set<Obj> lstJson= Collections.synchronizedSet(new HashSet<Obj>());
    private static int comps=0;
     public GameWebSocket() {
         if(lstJson.isEmpty())
        createWorld();
    }
    
     public void createWorld(){
         
         if(lstJson.isEmpty()){
             System.out.println("Create world !!");
             JsonObject imagem;
         JsonObject model;
         JsonObject jsonObject;
         
         imagem = Json.createObjectBuilder().add("width",40)
                                            .add("height",40).build();
         
         //Primeira fileira de caixas
         
         model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",40)
                                          .add("y",40)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id", "cx1")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx1")
                                                .build();
         
         lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",200)
                                          .add("y",40)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx2")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx2")
                                                .build();
         
         
       lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",360)
                                          .add("y",40)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx3")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx3")
                                                .build();
         
       lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",520)
                                          .add("y",40)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx4")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx4")
                                                .build();
         
        lstJson.add(new Obj(jsonObject));
         
         
         //Segunda fileira de caixas
         
         model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",40)
                                          .add("y",200)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx5")  
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx5")
                                                .build();
         
         lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",200)
                                          .add("y",200)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx6")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx6")
                                                .build();
         
         
        lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",360)
                                          .add("y",200)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx7")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx7")
                                                .build();
         
        lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",520)
                                          .add("y",200)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx8")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx8")
                                                .build();
         
        lstJson.add(new Obj(jsonObject));
         
         
         //Terceira fileira de caixas
         
         model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",40)
                                          .add("y",360)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx9")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx9")
                                                .build();
         
        lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",200)
                                          .add("y",360)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx10")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx10")
                                                .build();
         
         
        lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",360)
                                          .add("y",360)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx11")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx11")
                                                .build();
         
       lstJson.add(new Obj(jsonObject));
         
          model= Json.createObjectBuilder().add("imagem",imagem)
                                          .add("x",520)
                                          .add("y",360)
                                          .add("type","block")
                                          .add("state","higth")
                                          .add("id","cx12")
                                          .build();
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session","cx12")
                                                .build();
         
        lstJson.add(new Obj(jsonObject));
         }
         
     }
     
    @OnMessage
    public void broadCastObj(Obj obj,Session session) throws IOException, EncodeException {
      //  System.out.println("FFFF");
        System.out.println("Message");
         JsonObject model = Json.createObjectBuilder().add("session", session.getId())
                                                             .add("obj", obj.getJson()).build();
                System.out.println(model);
                Obj obj2 = new Obj(model);
                
                for(Obj json :lstJson){
            if(json.equals(obj2)){
                lstJson.remove(json);
                lstJson.add(obj2);
                break;
            }
        }
                
        for(Session peer :peers){
            if(!peer.equals(session)||(obj.getJson().getString("type").equalsIgnoreCase("shot"))){
               
                
                peer.getBasicRemote().sendObject(obj2);
               
                
                
            }
        }
        
        
        
        
        
    }

    @OnOpen
    public void onOpen(Session peer) throws IOException, EncodeException {
        peers.add(peer);
        
        int x=0;
        int y=440;
        int height=40;
        int width=40;
        final String STATE="up";
        
        for(Obj json :lstJson){
            while(json.isCollision(x, y, width, height, STATE)){
                if(x+width<=640){
                  x+=40;
                }
                else if(y>=0){
                    y-=40;
                }
                else if(x<=0){
                    x-=40;
                }
                else if(y+height>=480){
                    y+=40;
                }
           
            }
        }
      
        
        JsonObject imagem; 
        JsonObject model; 
        JsonObject jsonObject;
        
        imagem = Json.createObjectBuilder().add("width",width)
                                            .add("height",height).build();
         
         
             model = Json.createObjectBuilder().add("x",x)
                                           .add("y", y)
                                           .add("imagem",imagem)
                                           .add("type","tunk")
                                           .add("state","up")
                                           .add("player",peer.getId())
                                           .add("id",peer.getId())
                                           .build();
         
         jsonObject = Json.createObjectBuilder().add("obj",model)
                                                .add("session", peer.getId())
                                                .build();
        Obj objJson = new Obj(jsonObject);
//        for(Obj json :lstJson){
//            while(objJson.isCollision(json)){
//            objJson.getJson().put(null, Json.createObjectBuilder().add("x", objJson.getJson().getInt("x")+40).build());
//            }
//        }
        
        lstJson.add(objJson);
        
         
        
        JsonArray jsArray;
        JsonArrayBuilder builder =Json.createArrayBuilder();
        
        for(Obj json :lstJson){
             builder.add(json.getJson());
        }
        jsArray=builder.build();
        JsonObject jsonSender = Json.createObjectBuilder().add("session",peer.getId())
                                                          .add("jsonArray",jsArray).build();
       
        
        Obj obj = new Obj(jsonSender);
         peer.getBasicRemote().sendObject(obj);
         obj = new Obj(jsonObject);
        
        for(Session ses :peers){
            if(!ses.equals(peer))
            ses.getBasicRemote().sendObject(obj);
        }
        System.out.println("Comps "+comps);
               
       
        
       
        
        
        /*
         *  writetoscreen("Connected");
    var playerJson = JSON.stringify({
        "x": player.x,
        "y": player.y,
        "id": player.id,
        "type": player.type,
        "state": player.state,
        "acao": acao.PUT,
        "imagem": {
            "width": imagem.width,
            "height": imagem.height
        }
    });
         */
        
       
    }

    @OnClose
    public void onClose(Session peer) throws IOException, EncodeException {
        peers.remove(peer);
        System.out.println("fechou");  
        System.out.println("OBJs : "+lstJson.size());
       
//        for(Obj jsonObject :lstJson){
//            if(jsonObject.getJson().getString("session").equalsIgnoreCase(peer.getId())){
//                lstJson.remove(jsonObject);
//                 System.out.println("OBJs após conclose : "+lstJson.size());
//               
//                 
//            }
//        }
        
        JsonObject  model = Json.createObjectBuilder().add("id",peer.getId()).build();
        JsonObject jsonObject = Json.createObjectBuilder().add("obj", model).build();
        System.out.println("Antes do remove : "+lstJson.size());
        lstJson.remove(new Obj(jsonObject));
        System.out.println("Depois do remove : "+lstJson.size());
        
        //peers.remove(peer);
    }
    
    public void sendRemove(Session session,JsonObject obj) throws IOException, EncodeException{
        obj.put(null,Json.createObjectBuilder().add("acao", 2).build());
        for(Session peer :peers){
            if(peer!=session){
                peer.getBasicRemote().sendObject(obj);
            }
        }
        
        
    }

    
    
    
    
}




















