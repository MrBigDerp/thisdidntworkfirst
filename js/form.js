class Form{
    constructor(){
        this. title = createElement('h2');
        this. input = createInput('name');
        this. button = createButton('play')
        this. greeting = createElement('h3');

    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        this.title.html('CAR RACING GAME');
        this.title.position(130,0);
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            // mousepressed triggers the button n the data gets transmitted after dat
            // in order to attach the function to the form rather than button we use => 
            this.input.hide();
            this.button.hide();
            player.name = this.input.value()
            playerCount = playerCount+1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount)
            this.greeting.html('hellooooooo '+player.name)
            this.greeting.position(130,160)
        })
    }
}