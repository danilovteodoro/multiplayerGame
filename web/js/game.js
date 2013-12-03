var canvas = document.getElementById("tela");
var context = canvas.getContext("2d");
var mysession;
var fps_animation=5;



var STATE = {
    left: "left",
    rigth: "rigth",
    up: "up",
    down: "down"
    
};

var OBJTYPE = {
    block: "block",
    tunk: "tunk",
    shot:"shot",
    explosion1:"explosion1",
    explosion2:"explosion2",
    explosion3:"explosion3"
    
    
};

var LIFE={
    alive:"alive",
    dead:"dead"
};

function Objeto(x, y, heigth, width, state, img, type) {

    this.x = x;
    this.y = y;
    this.id = 0;
    this.frame=0;
    this.life=LIFE.alive;

    this.state = state;
//    var imagem = new Image();
//    imagem.src = "crate.png";
//    imagem.height = heigth;
//    imagem.width = width;
    this.imagem = img;
    this.type = type;



    this.getId = function() {
        return this.id;
    };
    this.setId = function(id) {
        this.id = id;
    };
    this.getX = function() {
        return this.x;
    };
    this.setX = function(x) {
        this.x = x;
    };
    this.getY = function() {
        return this.y;
    };
    this.setY = function(y) {
        this.y = y;
    };
    this.getImagem = function() {
        return this.imagem;
    };
    this.setImagem = function(imagem) {
        this.imagem = imagem;
    };
    this.getState = function() {
        return this.state;
    };
    this.setState = function(state) {
        this.state = state;
    };
    this.getType = function() {
        return this.type;
    };
    this.setType = function(type) {
        this.type = type;
    };

    this.getPosition = function() {
        return this.position;
    };
    this.setPosition = function(position) {
        this.position = position;
    };
    
    this.getFrame=function(){
        return this.frame;
    };
    this.setFrame=function(frame){
        this.frame=frame;
    };
    this.getLife=function(){
        return life;
    };
    this.setLife=function(life){
        this.life=life;
    };

}


var objs = new Array();

function putObj(obj) {
    var hasObj = false;
    var position=0;
    for (i = 0; i < objs.length; i++) {
        if (obj.id === objs[i].id && obj.id !== 0) {
            objs[i] = obj;
            if(objs[i].id===mysession){
                player=objs[i];
            }
            hasObj = true;
            position=i;
            break;
        }

    }
    if (!hasObj) {
        obj.position = objs.length;
        objs[objs.length] = obj;
        position=obj.position;
    }
    
    return position;
//    if(obj.id!==0){
//        objs[obj.id]=obj;
//    }
//    else{
//    obj.id = objs.length;
//    objs[objs.length] = obj;
//}
}

function removeObj(obj) {
    var arrAux = new Array();
    for (i = 0; i < objs.length; i++) {
        var ob = objs[i];
        if (obj.id === ob.id) {
            arrAux = arrAux.concat(objs.slice(0, i), objs.slice(i + 1, objs.length));
            objs = arrAux;
            break;
        }
    }

}

function drawObj() {
    for (i = 0; i < objs.length; i++) {
        var ob = objs[i];
        if (ob.type === OBJTYPE.tunk) {

            if (ob.state === STATE.up)
                context.drawImage(ob.imagem, 3, 0, 34, 39, ob.x, ob.y, 40, 40);
            else if (ob.state === STATE.rigth)
                context.drawImage(ob.getImagem(), 39, 0, 39, 34, ob.getX(), ob.getY(), 40, 40);
            else if (ob.state === STATE.down)
                context.drawImage(ob.getImagem(), 79, 0, 34, 40, ob.getX(), ob.getY(), 40, 40);
            else if (ob.state === STATE.left)
                context.drawImage(ob.getImagem(), 117, 0, 39, 34, ob.getX(), ob.getY(), 40, 40);
        }
        else if(ob.type===OBJTYPE.shot){
            if(ob.state===STATE.up)
                context.drawImage(ob.imagem, 0, 13, 10, 25, ob.x, ob.y, 10, 25);
            else if(ob.state===STATE.rigth)
                context.drawImage(ob.imagem, 12, 30, 25, 10, ob.x, ob.y, 25, 10);
            else if(ob.state===STATE.down)
               context.drawImage(ob.imagem, 37, 13, 10, 27, ob.x, ob.y, 10, 25);
           else if(ob.state===STATE.left)
                context.drawImage(ob.imagem, 47, 30, 25, 10, ob.x, ob.y, 25, 10);
           
        }
        else if(ob.type===OBJTYPE.block)
            context.drawImage(ob.getImagem(), ob.getX(), ob.getY(), 40, 40);
        else if(ob.type===OBJTYPE.explosion1)
            context.drawImage(fundo, 40, 65, 28, 30, ob.x, ob.y, 33, 33);
        else if(ob.type===OBJTYPE.explosion2)
            context.drawImage(fundo, 70, 65, 28, 30, ob.x, ob.y, 33, 33);
        else if(ob.type===OBJTYPE.explosion3)
            context.drawImage(fundo, 98, 65, 28, 30, ob.x, ob.y, 33, 33);
            

        if (ob.id === mysession) {
            var lineSize="3";
            context.beginPath();
            context.lineWidth = lineSize;
            context.strokeStyle = "green";
            context.moveTo(ob.x, ob.y);
            context.lineTo(ob.x + ob.imagem.width, ob.y);
            context.stroke();
            
            context.beginPath();
            context.lineWidth = lineSize;
            context.strokeStyle = "green";
            context.moveTo(ob.x+ob.imagem.width,ob.y);
            context.lineTo(ob.x+ob.imagem.width,ob.y+ob.imagem.height);
            context.stroke();
            
            context.beginPath();
            context.lineWidth = lineSize;
            context.strokeStyle = "green";
            context.moveTo(ob.x+ob.imagem.width,ob.y+ob.imagem.height);
            context.lineTo(ob.x,ob.y+ob.imagem.height);
            context.stroke();
            
            context.beginPath();
            context.lineWidth = lineSize;
            context.strokeStyle = "green";
            context.moveTo(ob.x,ob.y+ob.imagem.height);
            context.lineTo(ob.x,ob.y);
            context.stroke();
            
        }
    }
}

function isColision(obj) {
    var isOk = null;
    for (i = 0; i < objs.length; i++) {
        var ob = objs[i];
        if (ob.id === obj.id)
            continue;
        if (obj.state === STATE.left) {
            if (obj.x <= ob.x + ob.getImagem().width && obj.x >= ob.x && obj.y + obj.getImagem().height - 2 > ob.y && obj.y < ob.y + ob.getImagem().height - 2) {
                isOk = ob;
                console.log("colision left");
            }
        }
        else if (obj.state === STATE.rigth) {
            if (obj.x + obj.getImagem().width >= ob.x && obj.x < ob.x + ob.getImagem().width - 2 && obj.y + obj.getImagem().height - 2 > ob.y && obj.y < ob.y + ob.getImagem().height - 2) {
                isOk = ob;
                console.log("colision right");
            }
        }
        else if (obj.state === STATE.up) {
            if (obj.y <= ob.y + ob.getImagem().height && obj.y >= ob.y && obj.x + obj.getImagem().width > ob.x + 2 && obj.x < ob.x + ob.getImagem().width - 2) {
                isOk = ob;
                console.log("colision up");
            }
        }
        else if (obj.state === STATE.down) {
            if (obj.y + obj.getImagem().height >= ob.y && obj.y <= ob.y && obj.x + obj.getImagem().width > ob.x + 2 && obj.x < ob.x + ob.getImagem().width - 2) {
                isOk = ob;
                console.log("colision down");
                
            }
        }


    }

//    console.log("OB x : " + ob.x + " OBJ x : " + obj.x);
//    console.log("OB y : " + ob.y + " OBJ y : " + obj.y);
    return isOk;

}

var imagem = new Image();
imagem.src = "caixote.png";
imagem.width = 40;
imagem.height = 40;

//Cordenadas iniciais da imagem
var x = 0;
var y = 440;
var img = new Image();
img.src = "tanks2.png";
img.width = 40;
img.height = 40;

var fundo = new Image();
fundo.src = "tanks_sheet.png";
fundo.width = 40;
fundo.height = 40;

var shot = new Image();
shot.src="shot.png";
shot.width=10;
shot.height=25;

var player = new Objeto(x, y, 40, 40, STATE.up, img, OBJTYPE.tunk);
player.id = 1;



//var playerJson = JSON.stringify({
//    "x":player.x,
//    "y":player.y,
//    "id":player.id,
//    "type":player.type,
//    "state":player.state,
//    "imagem":{
//        "width":imagem.width,
//        "height":imagem.height
//    }
//});

function playerMove() {



    playerJson = JSON.stringify({
        "x": player.x,
        "y": player.y,
        "id": player.id,
        "type": player.type,
        "state": player.state,
        "imagem": {
            "width": imagem.width,
            "height": imagem.height
        }
    });
    sendText(playerJson);

}

function atira(){
  if(player.state===STATE.up){
    var objShot=new Objeto((player.x+(player.imagem.width/2))-4,(player.y-shot.height),shot.height,shot.width,player.state,shot,OBJTYPE.shot);
        var playerJsonShot = JSON.stringify({
        "x": objShot.x,
        "y": objShot.y,
        "id": player.id+"shot",
        "type": objShot.type,
        "state": objShot.state,
        "acao": 0,
        "imagem": {
            "width": shot.width,
            "height": shot.height
        }
    });
    sendText(playerJsonShot);
  }
  else if(player.state===STATE.rigth){
      shot = new Image();
      shot.src="shot.png";
      shot.width=20;
      shot.height=10;
        var objShot=new Objeto((player.x+player.imagem.width),(player.y+(player.imagem.height/2))-4,shot.height,shot.width,player.state,shot,OBJTYPE.shot);
    //putObj(objShot);
      playerJsonShot = JSON.stringify({
        "x": objShot.x,
        "y": objShot.y,
        "id": player.id+"shot",
        "type": objShot.type,
        "state": objShot.state,
        "acao": 0,
        "imagem": {
            "width": shot.width,
            "height": shot.height
        }
    });
        sendText(playerJsonShot);

    
  }
  
  else if(player.state===STATE.down){
        shot = new Image();
        shot.src="shot.png";
        shot.width=10;
        shot.height=20;
     
        objShot=new Objeto((player.x+(player.imagem.width/2))-4,(player.y+shot.height),shot.height,shot.width,player.state,shot,OBJTYPE.shot);
    //putObj(objShot);
     playerJsonShot = JSON.stringify({
        "x": objShot.x,
        "y": objShot.y,
        "id": player.id+"shot",
        "type": objShot.type,
        "state": objShot.state,
        "acao": 0,
        "imagem": {
            "width": shot.width,
            "height": shot.height
        }
    });
   
        sendText(playerJsonShot);
  }
  else if(player.state===STATE.left){
       shot = new Image();
      shot.src="shot.png";
      shot.width=25;
      shot.height=15;
        var objShot=new Objeto((player.x-2),(player.y+(player.imagem.height/2))-4,shot.height,shot.width,player.state,shot,OBJTYPE.shot);
    //putObj(objShot);
      playerJsonShot = JSON.stringify({
        "x": objShot.x,
        "y": objShot.y,
        "id": player.id+"shot",
        "type": objShot.type,
        "state": objShot.state,
        "acao": 1,
        "imagem": {
            "width": shot.width,
            "height": shot.height
        }
    });
        sendText(playerJsonShot);
  }


   
}

//console.log("Joson e envio :"+playerJson);


function worldCreate() {

    putObj(new Objeto(40, 40, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(200, 40, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(360, 40, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(520, 40, 40, 40, STATE.rigth, imagem));

    putObj(new Objeto(40, 200, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(200, 200, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(360, 200, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(520, 200, 40, 40, STATE.rigth, imagem));

    putObj(new Objeto(40, 360, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(200, 360, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(360, 360, 40, 40, STATE.rigth, imagem));
    putObj(new Objeto(520, 360, 40, 40, STATE.rigth, imagem));

//    putObj(new Objeto(80, 320, 40, 40, STATE.rigth, imagem));
//    putObj(new Objeto(160, 320, 40, 40, STATE.rigth, imagem));
//    putObj(new Objeto(160 + 80, 320, 40, 40, STATE.rigth, imagem));
    putObj(player);
}



//worldCreate();

var id_interval = window.setInterval('gameLoop()', 20); //Executa o gameLoop a cada 50 milissegundos


function gameLoop() {
    moveshot();
    explosions();   
    desenharImagem();
    deadScream();
    
    

    if (x >= 640 - imagem.width) {
        //window.clearInterval(id_interval); //interrompe a execução do game loop
    }
    
}
var soma = true;
function desenharImagem() {
    context.clearRect(0, 0, 640, 480);

    // context.drawImage(fundo,0,0,20,20,0,50);
    // context.drawImage(fundo, 0, 0, 30, 30, 0, 0,640,480);

    for (i = 0; i < 640; i += 40) {
        for (j = 0; j < 480; j += 40) {
            context.drawImage(fundo, 0, 0, 30, 30, i, j, 40, 40);
        }
    }




    drawObj();
   
    
   

    //context.drawImage(player.getImagem(), player.getX(), player.getY(), player.getImagem().width, player.getImagem().height);


//context.drawImage(imagem2,80,320-imagem2.height,40,40);
}
window.onkeydown = precionaTecla;

function precionaTecla(e) {
    // sendText(playerJson);
   
   if(player.life===LIFE.alive){ 
        console.log("Tecla"+e.keyCode);
    if (e.keyCode === 37) {
        player.state = STATE.left;
        if (!isColision(player))
            if (player.x > 0) {
                player.x = player.x - 3;
            }
    }
    if (e.keyCode === 39) {

        player.state = STATE.rigth;
        if (!isColision(player)) {
            console.log("player mov");
            if (player.x < 640 - player.getImagem().width) {
                player.x = player.x + 3;
               
            }
        }


    }
    if (e.keyCode === 38) {
        player.state = STATE.up;
        if (!isColision(player))
            if ((player.y) > 0) {
                player.y = player.y - 3;
                // console.log(player.y);
            }
    }
    if (e.keyCode === 40) {
        player.state = STATE.down;
        if (!isColision(player))
            if (player.y < 480 - player.getImagem().height) {
                player.y = player.y + 3;
            }
    }
    if(e.keyCode===65){
        atira();
       
        
        //putObj(objShot);
        
       
    }
    playerMove();
    //objs[player.id].x+=player.x+1;
    console.log("X " + player.x);
    // console.log(e.keyCode);
   }else{
       if(player_continue){
           if(e.keyCode===13){
            continuar();
            player_continue=false;
        }
       }
   }

}



function moveshot(){
    var i=0;
    while(i<objs.length){
        if(objs[i].type===OBJTYPE.shot){
            var obj = objs[i];
            if(obj.state===STATE.up){
                var obj_colision =isColision(obj);
                if(!obj_colision&&obj.y>=0){
                    obj.y-=10;
                    
                    
                }
                else{
                    obj.y-=10;
                    obj.type=OBJTYPE.explosion1;
                    if(obj_colision.type===OBJTYPE.tunk){
                        kill(obj,obj_colision);
                    }
                  //  removeObj(obj);
                }
                
            }
            else if(obj.state===STATE.rigth){
                var obj_colision =isColision(obj);
                if(!obj_colision&&obj.x<=640-obj.imagem.width-10){
                    obj.x+=10;
                    
                    
                }
                else{
                    obj.x+=10;
                    obj.type=OBJTYPE.explosion1;
                    if(obj_colision.type===OBJTYPE.tunk){
                        kill(obj,obj_colision);
                    }
                   // removeObj(obj);
                }
                
            }
            else if(obj.state===STATE.down){
                var obj_colision = isColision(obj);
                if(!obj_colision&&obj.y<=480-obj.imagem.height-10){
                    obj.y+=10;
                }
                else{
                    obj.y+=10;
                    obj.type=OBJTYPE.explosion1;
                    if(obj_colision.type===OBJTYPE.tunk){
                        kill(obj,obj_colision);
                    }
                    //removeObj(obj);
                }
            }
            
            else if(obj.state===STATE.left){
                var obj_colision=isColision(obj);
                if(!obj_colision&&obj.x>=0){
                    obj.x-=10;
                }
                else{
                    obj.x-=10;
                    obj.type=OBJTYPE.explosion1;
                    if(obj_colision.type===OBJTYPE.tunk){
                        kill(obj,obj_colision);
                    }
                   
                }
            }
            
        }
        
        i+=1;
    }
}


function explosions(){
    var i=0;
   
    
    while(i<objs.length){
        var obj = objs[i];
        if(obj.type===OBJTYPE.explosion1){
          if(obj.frame===fps_animation)
          obj.type=OBJTYPE.explosion2;
      else
          obj.frame++;
      
        }
        else if(obj.type===OBJTYPE.explosion2){
            if(obj.frame===(fps_animation*2))
             obj.type=OBJTYPE.explosion3;               
            else
                 obj.frame++;                   
     
        }
        else if(obj.type===OBJTYPE.explosion3){
            if(obj.frame===(fps_animation*3)){
                
                removeObj(obj);
            }
            else
                obj.frame++;
        }
        
        
       
        i+=1;
    }
    
}

var dead_frame=0;
var dead_date;
var dead_cont=0;
var player_continue=false;
function deadScream(){
    if(player.life===LIFE.dead){
        if(dead_cont===0){
            dead_date=new Date();
            dead_cont=dead_date.getTime()+10000;
        }
        if(dead_frame===(fps_animation*4)){
            context.clearRect(0, 0, 640, 480);
            context.fillStyle='#000000';
            context.fillRect(0,0,640,480);
            //context.fillStyle = "#FF0000";
            context.fillStyle='#00FF00';
            context.filltext='#00EE00';
            context.font = "normal lighter 100px verdana";          
            context.fillText("You Die !",100,80);
            
            context.fillStyle='#00FF00';
            context.filltext='#00EE00';
            context.font = "normal lighter 50px verdana";          
            context.fillText("Continue",200,200);
            
            context.fillStyle='#00FF00';
            context.filltext='#00EE00';
            context.font = "normal lighter 30px verdana";  
            
            var date = new Date();
            var dif=dead_cont-date.getTime();
            if(dif>0)
            context.fillText((dif/1000).toFixed(0),300,400);
            else{
                context.fillText("PRESS ENTER",210,400);
                player_continue=true;
            }
            
              
           
        }
        else
        dead_frame++;
        
    }
    
}

function kill(killer,dead){
    if(dead instanceof Objeto){
        dead.type=OBJTYPE.explosion1;
        dead.life=LIFE.dead;
        
    }
}

function continuar(){
    player.type=OBJTYPE.tunk;
    player.imagem=img;
    player.life=LIFE.alive;
    
     player.x=Math.floor(Math.random()*601);
     player.y=Math.floor(Math.random()*440);
    while(isColision(player)){
        player.x=Math.floor(Math.random()*601);
        player.y=Math.floor(Math.random()*440);;
    }
    var playerJson = JSON.stringify({
        "x": player.x,
        "y": player.y,
        "id": player.id,
        "type": player.type,
        "state": player.state,
        "acao": 1,
        "imagem": {
            "width": imagem.width,
            "height": imagem.height
        }
    });
    
    
   
    sendText(playerJson);
    putObj(player);
    dead_frame=0;
    dead_date;
    dead_cont=0;
    player_continue=false;
    

}

function removePlayer(){
    var playerJson = JSON.stringify({
        "x": player.x,
        "y": player.y,
        "id": player.id,
        "type": player.type,
        "state": player.state,
        "acao": 2,
        "imagem": {
            "width": imagem.width,
            "height": imagem.height
        }
    });
   // player.life=LIFE.alive;
    sendText(playerJson);
    
    
}

































