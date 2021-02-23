class Cell {
    color;
    
    cellPositionX;
    cellPositionY;
    positionX;
    positionY;

    sizeX = 24;
    sizeY = 24;

    indent = 1;


    constructor(posX, posY) {
        this.color = "#212121";
        this.cellPositionX = posX;
        this.cellPositionY = posY;
        this.positionX = posX * (this.sizeX + this.indent);
        this.positionY = posY * (this.sizeY + this.indent);
    }
}

class appleCell extends Cell {
    constructor(posX, posY) {
        super(posX, posY);
        this.color = "tomato";
    }
}

class snakeCell extends Cell {
    constructor(posX, posY) {
        super(posX, posY);
        this.color = "#0277BD";
    }
}