class GameManager {
    engine = {};
    grid = {};
    apple = {};
    constructor(canvas) {
        this.engine = new Engine(canvas);
        this.grid = new Grid();
        this.apple = new Apple();
    }

    Start() {
        this.engine.clear();
        this.engine.drawGrid(this.grid);
        this.apple.setCell(this.GetRandomCell());
        this.engine.drawApple(this.apple);
    }

    GetRandomCell() {
        let length = this.grid.cells.length;
        let index = Math.floor(Math.random() * length);
        return this.grid.cells[index];
    }

    GetInput(e) {
        if (e.key == ' ')
            this.Start();
    }
}
