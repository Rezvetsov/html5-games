class Engine {
    static canvas;
    static ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    drawGrid(grid) {
        for (let i = 0; i < grid.cells.length; i++) {
            let cell = grid.cells[i];
            this.drawCell(cell);
        }
    }

    drawCell(cell) {
        this.ctx.fillStyle = cell.color;
        this.ctx.fillRect(cell.positionX, cell.positionY, cell.sizeX, cell.sizeY);
    }

    drawApple(apple) {
        this.ctx.fillStyle = apple.color;
        this.ctx.fillRect(apple.cell.positionX,
            apple.cell.positionY,
            apple.cell.sizeX,
            apple.cell.sizeY);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
