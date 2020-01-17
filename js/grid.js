class Grid {
    sizeX = 24;
    sizeY = 24;
    cells = new Array();
    constructor() {
        obstacles.setBorder(this.sizeX, this.sizeY);
        for (let i = 0; i < this.sizeX; i++) {
            this.cells[i] = new Array();
            for (let j = 0; j < this.sizeY; j++) {
                let cell = new Cell(i, j);
                this.cells[i][j] = cell;
            }
        }
    }
}
