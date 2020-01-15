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
        /* Movement */      
        // Up
        if (e.keyCode == '87' || e.keyCode == '38'){
            this.snake.move(directions.up);          
            this.NextFrame();
        } 
        // Right
        else if (e.keyCode == '68' || e.keyCode == '39') {
            this.snake.move(directions.right);
            this.NextFrame();
        } 
        // Down
        else if (e.keyCode == '83' || e.keyCode == '40') {
            this.snake.move(directions.down);
            this.NextFrame();
        } 
        // Left
        else if (e.keyCode == '65' || e.keyCode == '37') {
            this.snake.move(directions.left);
            this.NextFrame();
        }
    }
}

