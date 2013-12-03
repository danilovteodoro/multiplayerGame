var wsUrl = "ws://" + document.location.host + "/endPoindt/game";
//var wsUrl ="ws://"+document.location.host+"/webSocketApp/whiteboardendpoit";
console.log(wsUrl);
var websocket = new WebSocket(wsUrl);

var output = document.getElementById("output");
websocket.onopen = function(evt) {
    onOpen(evt);
};
websocket.onerror = function(evt) {
    onError(evt);
};
websocket.onclose = function(evt) {
    onClose(evt);
};
websocket.onmessage = function(evt) {
    onMessage(evt);
};


window.addEventListener('beforeunload', al);

function al() {
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



    sendText(playerJson);

    

    websocket.close();
}



var acao = JSON.parse(
        JSON.stringify({
    "PUT": 1,
    "REMOVE": 2
})
        );

function onOpen(evt) {

    writetoscreen("Connected");
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



    //sendText(playerJson);

    console.log("jsonArrayEnvio : " + playerJson);
}

function onError(evt) {
    writetoscreen('<span style="color: red;">ERROR:</span> ' + evt.data + wsUrl);
}

function onClose(evt) {




console.log("close");

}

function onMessage(evt) {

    console.log("jsonArray recebido : " + evt.data);
//    var jsonArray = JSON.parse(evt.data);
//    var obj =new Objeto(jsonArray.x,jsonArray.y,jsonArray.imagem.height,jsonArray.imagem.width,jsonArray.state,img,jsonArray.type);

    var data = JSON.parse(evt.data);
    var session = data.session;
    console.log("session me: " + session);
    var jsonArray = data.jsonArray;


    if (typeof jsonArray!=='undefined') {
        for (var i = 0; i < jsonArray.length; i++) {
            var obj;
            if (jsonArray[i].obj.type === OBJTYPE.tunk) {
                obj = new Objeto(jsonArray[i].obj.x, jsonArray[i].obj.y, jsonArray[i].obj.imagem.height, jsonArray[i].obj.imagem.width, jsonArray[i].obj.state, img, jsonArray[i].obj.type);
                if (jsonArray[i].obj.player === session) {
                    player = obj;
                    player.id = session;
                    mysession=session;
                }
            }
            else
                obj = new Objeto(jsonArray[i].obj.x, jsonArray[i].obj.y, jsonArray[i].obj.imagem.height, jsonArray[i].obj.imagem.width, jsonArray[i].obj.state, imagem, jsonArray[i].obj.type);
            console.log("session : " + jsonArray[i].session);
            obj.id = jsonArray[i].session;


            if (jsonArray[i].obj.acao === acao.REMOVE) {
                console.log("REMOVE");
                removeObj(obj);

            }
            else {
                putObj(obj);
            }
        }
        
    }
    else{
        console.log("Entrou outro");
        
         var obj;
         
            if (data.obj.type === OBJTYPE.tunk) {
                obj = new Objeto(data.obj.x, data.obj.y, data.obj.imagem.height, data.obj.imagem.width, data.obj.state, img, data.obj.type);
//                if (data.obj.player === session) {
//                    player = obj;
//                    player.id = data.obj.id;
//                }
                obj.id=data.obj.id;  
            }
            else if(data.obj.type === OBJTYPE.shot){
                 obj = new Objeto(data.obj.x, data.obj.y, data.obj.imagem.height, data.obj.imagem.width, data.obj.state, shot, data.obj.type);
//                
                // obj.id=data.obj.id;  
                putObj(obj);
                
            }
            else
                obj = new Objeto(data.obj.x, data.obj.y, data.obj.imagem.height, data.obj.imagem.width, data.obj.state, imagem, data.obj.type);
            console.log("session : " + data.session);
            //obj.id = data.session;


            if (data.obj.acao === acao.REMOVE) {
                console.log("REMOVE");
                removeObj(obj);

            }
            else {
                putObj(obj);
            }
        
    }

}

function writetoscreen(message) {
    output.innerHTML += message + "<br>";
}

function sendText(json) {

    websocket.send(json);
}