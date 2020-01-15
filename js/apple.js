class Apple {
    color = cellColors.apple;
    cell;
    constructor(pos){
        this.cell = new Cell(cellColors.apple, pos.x, pos.y);
    }
}