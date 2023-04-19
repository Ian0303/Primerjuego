export default class Game extends Phaser.Scene{
    constructor(){
        super('game');

    }

    init(){

    }

    preload(){
        this.load.image("sky", "./assets/images/Sky.png");
        this.load.image("ground", "./assets/images/platform.png");
        this.load.image("ninja", "./assets/images/Ninja.png");
        this.load.image("square", "./assets/images/Square.png");
        this.load.image("diamond", "./assets/images/Diamond.png");
        this.load.image("triangle", "./assets/images/Triangle.png");



    }

    create(){
        //add background
        this.add.image(400, 300, "sky").setScale(0.555);

        //add static platforms group
        let plataforms = this.physics.add.staticGroup();
        plataforms.create(400, 568, "ground").setScale(2).refreshBody();

        //
        this.shapesGroup = this.physics.add.group();
        this.shapesGroup.create(100, 0, 'diamond');
        this.shapesGroup.create(200, 0, 'triangle');
        this.shapesGroup.create(300, 0, 'square');


        //
        //
        this.player = this.physics.add.sprite(100, 450, "ninja");
        this.player.setCollideWorldBounds(true);

    }

    uptdate(){

    }

}