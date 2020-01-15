class Apple {
    cell;
    eaten = false;
    constructor(pos){
        this.cell = new appleCell(pos.x, pos.y);
        obstacles.apple = this;
    }
}
