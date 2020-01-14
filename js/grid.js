class Grid {
    sizeX = 24;
    sizeY = 24;
    cells = new Array();
    constructor() {
        for (let i = 0; i < this.sizeX; i++) {
            for (let j = 0; j < this.sizeY; j++) {
                let cell = new Cell();

                cell.setPositionXY(i, j);
                this.cells.push(cell);
            }
        }
    }
}
