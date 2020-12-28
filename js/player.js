class Player{
    constructor(){
        this.index = null
        this.distance  = 0  
        this.name = null
        
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on('value',(data)=>{
            allPlayers = data.val();
            //v r extracting valur from .on and puttin data in allPlayers
        })
    }
    update(){
        //name of function is update but thing in () is the container
        var playerIndex = 'players/player'+this.index
        database.ref(playerIndex).set({
            name : this.name, 
        distance:this.distance});
        //distance defines the database's field like firebase (field name) and this.distance is players' property
    }
    updateCount(count){
        database.ref('/').update({playerCount:count})
    }
getCount(){
    var playerCountRef = database.ref('playerCount')
    playerCountRef.on('value',function(data){
        playerCount = data.val()
    })
}
}