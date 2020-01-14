class GameManager {
    engine = {};
    grid = {};
    apple = {};
    snake = {};
    constructor(canvas) {
        this.grid = new Grid();
        this.engine = new Engine(canvas, this.grid);
        this.apple = new Apple();
        this.snake = new Snake();
    }

    Start() {
        this.engine.clear();
        this.engine.drawGrid(this.grid);
        this.apple.setCell(this.GetRandomCell());
        this.engine.drawApple(this.apple);
        this.engine.drawSnake(this.snake);
    }

    NextFrame(){
        this.engine.clear();
        this.engine.drawGrid(this.grid);
        this.engine.drawApple(this.apple);
        this.engine.drawSnake(this.snake);

    }

    GetRandomCell() {
        let length = this.grid.cells.length;
        let index1 = Math.floor(Math.random() * length);
        let index2 = Math.floor(Math.random() * length);
        return this.grid.cells[index1][index2];
    }

    GetInput(e) {
        console.log(e.key);
        
        if (e.key == 'w'){
            this.snake.move(directions.up);          
            this.NextFrame();
        } else if (e.key == 'd') {
            this.snake.move(directions.right);
            this.NextFrame();
        } else if (e.key == 's') {
            this.snake.move(directions.down);
            this.NextFrame();
        } else if (e.key == 'a') {
            this.snake.move(directions.left);
            this.NextFrame();
        }
    }
}

