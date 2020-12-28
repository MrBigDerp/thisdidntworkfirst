class Game{
    constructor(){

    }
    play(){
        form.hide();
        textSize(30);
        text("GAME START",120,100)
        Player.getPlayerInfo()
        var displayPosition = 130
        for(var plr in allPlayers){
            //v r creating var plr which should run through all the things under allplayers var
            if(allPlayers!=undefined){
                console.log(allPlayers)
                displayPosition+=20;
                if(plr==="player"+player.index){
                    fill("red")
                    
                }
                else{
                    fill("black")
                }
                textSize(15)
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition)
            }

        }
        if(keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=50
            player.update();
            
        }
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
   async start(){
    if(gameState===0) {
    player = new Player();
    var playerCountRef=await database.ref('playerCount').once("value")
    if(playerCountRef.exists()){
        playerCount = playerCountRef.val()
        player.getCount();
    }
        form = new Form();
        form.display();

}
}
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function (data){
            gameState = data.val();
        })
    }
}