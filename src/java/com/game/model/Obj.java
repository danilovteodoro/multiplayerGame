/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.game.model;

import java.io.StringWriter;
import javax.json.JsonObject;
import javax.json.Json;
import javax.json.JsonArray;

/**
 *
 * @author danilo
 */
public class Obj {
    
    JsonObject json;
    JsonArray jsArray;

    public Obj(JsonObject json) {
        this.json = json;
    }
    
    public Obj(JsonArray jsArray){
        this.jsArray=jsArray;
    }

    public JsonObject getJson() {
        return json;
    }

    public void setJson(JsonObject json) {
        this.json = json;
    }

    public JsonArray getJsArray() {
        return jsArray;
    }

    public void setJsArray(JsonArray jsArray) {
        this.jsArray = jsArray;
    }
    
    public boolean isCollision(Obj obj){
  //if (obj.state === STATE.left) {
    //  if (obj.x <= ob.x + ob.getImagem().width && obj.x >= ob.x && obj.y + obj.getImagem().height - 2 > ob.y && obj.y < ob.y + ob.getImagem().height - 2)
        
        JsonObject mJson = this.getJson().getJsonObject("obj");
        JsonObject objJson  = obj.getJson().getJsonObject("obj");
        
        JsonObject mImagem = mJson.getJsonObject("imagem");
        JsonObject objImagem = objJson.getJsonObject("imagem");
        
        int mX = mJson.getInt("x");
        int mY = mJson.getInt("y");
        int objX= objJson.getInt("x");
        int objY = objJson.getInt("y");
        
        if(objJson.getString("state").equalsIgnoreCase("left")){
            if(objX<=mX+mImagem.getInt("width")&&objX>=mX&&
                    objY+objImagem.getInt("height")-2>mY&&
                    objY<mY+mImagem.getInt("height")-2){
                return true;
            }
        }
/* else if (obj.state === STATE.rigth) {
if (obj.x + obj.getImagem().width >= ob.x && obj.x < ob.x + ob.getImagem().width - 2 && obj.y + obj.getImagem().height - 2 > ob.y && obj.y < ob.y + ob.getImagem().height - 2)*/    
        
        else if(objJson.getString("state").equalsIgnoreCase("rigth")){
            if(objX+objImagem.getInt("width")>=mX&&
                    objX<mX+mImagem.getInt("width")-2&&
                    objY+objImagem.getInt("height")-2>mY&&
                    objY<mY+objImagem.getInt("height")-2){
                return true;
            }
            
            
        }
        
/*else if (obj.state === STATE.up) {
if (obj.y <= ob.y + ob.getImagem().height && obj.y >= ob.y && obj.x + obj.getImagem().width > ob.x + 2 && obj.x < ob.x + ob.getImagem().width - 2) {*/        
        
       else if(objJson.getString("state").equalsIgnoreCase("up")){
           if(objY<=mY+mImagem.getInt("height")&&
                   objY>=mY&&objX+objImagem.getInt("width")>mX+2&&
                   objX<mX+mImagem.getInt("width")-2){
               return true;
           }
        }
        
/*else if (obj.state === STATE.down) {
if (obj.y + obj.getImagem().height >= ob.y && obj.y <= ob.y && obj.x + obj.getImagem().width > ob.x + 2 && obj.x < ob.x + ob.getImagem().width - 2) {
     */
        
       else if(objJson.getString("state").equalsIgnoreCase("down")){
           if(objY+objImagem.getInt("height")>=mY&&
                   objY<=mY&&objX+objImagem.getInt("x")>mX+2&&
                   objX<mX+mImagem.getInt("width")-2){
               return true;
           }
       }
        
        
        
        return false;
    }
    
    public boolean isCollision(int objX,int objY,int width, int height,String state){
         //if (obj.state === STATE.left) {
    //  if (obj.x <= ob.x + ob.getImagem().width && obj.x >= ob.x && obj.y + obj.getImagem().height - 2 > ob.y && obj.y < ob.y + ob.getImagem().height - 2)
        
        JsonObject mJson = this.getJson().getJsonObject("obj");
      
        
        JsonObject mImagem = mJson.getJsonObject("imagem");
       
        
        int mX = mJson.getInt("x");
        int mY = mJson.getInt("y");
        
        
        if(state.equalsIgnoreCase("left")){
            if(objX<=mX+mImagem.getInt("width")&&objX>=mX&&
                    objY+height-2>mY&&
                    objY<mY+mImagem.getInt("height")-2){
                return true;
            }
        }
/* else if (obj.state === STATE.rigth) {
if (obj.x + obj.getImagem().width >= ob.x && obj.x < ob.x + ob.getImagem().width - 2 && obj.y + obj.getImagem().height - 2 > ob.y && obj.y < ob.y + ob.getImagem().height - 2)*/    
        
        else if(state.equalsIgnoreCase("rigth")){
            if(objX+width>=mX&&
                    objX<mX+mImagem.getInt("width")-2&&
                    objY+height-2>mY&&
                    objY<mY+height-2){
                return true;
            }
            
            
        }
        
/*else if (obj.state === STATE.up) {
if (obj.y <= ob.y + ob.getImagem().height && obj.y >= ob.y && obj.x + obj.getImagem().width > ob.x + 2 && obj.x < ob.x + ob.getImagem().width - 2) {*/        
        
       else if(state.equalsIgnoreCase("up")){
           if(objY<=mY+mImagem.getInt("height")&&
                   objY>=mY&&objX+width>mX+2&&
                   objX<mX+mImagem.getInt("width")-2){
               return true;
           }
        }
        
/*else if (obj.state === STATE.down) {
if (obj.y + obj.getImagem().height >= ob.y && obj.y <= ob.y && obj.x + obj.getImagem().width > ob.x + 2 && obj.x < ob.x + ob.getImagem().width - 2) {
     */
        
       else if(state.equalsIgnoreCase("down")){
           if(objY+height>=mY&&
                   objY<=mY&&objX+width>mX+2&&
                   objX<mX+mImagem.getInt("width")-2){
               return true;
           }
       }
        
        
        
        return false;
    }
    

    @Override
    public String toString() {
       
        StringWriter writer = new StringWriter();
        Json.createWriter(writer).write(json);
        return writer.toString(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean equals(Object obj) {
         if(!(obj instanceof Obj))
             return false;
         
         Obj pObj=(Obj)obj;
         if(this.getJson().getJsonObject("obj").getString("id").equals(pObj.getJson().getJsonObject("obj").getString("id")))
             return true;
         
         return false;
    }
    
    
    
    
    
}
