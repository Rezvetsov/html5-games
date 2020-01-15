class Cell {
    color;
    
    cellPositionX;
    cellPositionY;
    positionX;
    positionY;

    sizeX = 24;
    sizeY = 24;

    indent = 1;


    constructor(color, posX, posY) {
        this.color = color;
        this.cellPositionX = posX;
        this.cellPositionY = posY;
        this.positionX = posX * (this.sizeX + this.indent);
        this.positionY = posY * (this.sizeY + this.indent);
    }
}
