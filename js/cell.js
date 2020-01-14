class Cell {
    positionX;
    positionY;

    sizeX = 24;
    sizeY = 24;

    indent = 1;

    color = "#212121";

    constructor(color) {
        if (color != undefined)
            this.color = color;
    }
    setPositionCell(cell) {
        this.positionX = cell.positionX;
        this.positionY = cell.positionY;
    }
    setPositionXY(posX, posY) {
        if (posX == undefined) {
            throw "Не задана позиция клетки по X";
        }
        if (posY == undefined) {
            throw "Не задана позиция клетки по Y";
        }
        this.positionX = posX * (this.sizeX + this.indent);
        this.positionY = posY * (this.sizeY + this.indent);
    }
}
