import {SHAPES} from '../../utils.js';
const{TRIANGLE, SQUARE, DIAMOND, REDTRIANGLE} = SHAPES;
export default class Preload extends Phaser.Scene {
constructor() {
    super("Preload");
}

preload(){
    this.load.image("sky", "./assets/images/Sky.png");
    this.load.image("ground", "./assets/images/platform.png");
    this.load.image("ninja", "./assets/images/Ninja.png");
    this.load.image(SQUARE, "./assets/images/Square.png");
    this.load.image(DIAMOND, "./assets/images/Diamond.png");
    this.load.image(TRIANGLE, "./assets/images/Triangle.png");
    this.load.image("moon", "./assets/images/moon4.png");
    this.load.image(REDTRIANGLE, "./assets/images/redTriangle.png");

    this.load.image("win2", "./assets/images/Win2.png");
    this.load.image("gameOver", "./assets/images/GameOver.png");


}

create() {
    this.scene.start("Game");
}











}