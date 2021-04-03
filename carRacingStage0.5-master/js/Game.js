class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide()
    textSize(35)
    text("Game Start",150,100)
    Player.getPlayerInfo()
    if(allPlayers !== undefined){
      var y=150
      for(var plr in allPlayers){
        if(plr === "player"+player.index){
          fill("blue")
        }
        else{
          fill("black")
        }
        y=y+30;
        textSize(15)
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,y)
      }     
    }
    if(keyIsDown(UP_ARROW)&&player.index !==null){
      player.distance+=50
      player.update()
    }
  }
}
