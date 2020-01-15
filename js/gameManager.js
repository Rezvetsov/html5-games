class GameManager {
    engine = {};
    grid = {};
    apple = {};
    snake = {};
    constructor(canvas) {
        this.grid = new Grid();
        this.engine = new Engine(canvas, this.grid);
            }

    Start() {
        this.engine.clear();
        this.snake = new Snake();
        this.apple = new Apple(this.GetRandomCellPosition());
        this.engine.drawGrid(this.grid);
        this.engine.drawSnake(this.snake);
        this.engine.drawApple(this.apple);        
    }

    NextFrame(){
        this.engine.clear();
        this.engine.drawGrid(this.grid);
        this.engine.drawSnake(this.snake);

        if(this.apple.eaten == true){
            this.apple = new Apple(this.GetRandomCellPosition());
        }
        this.engine.drawApple(this.apple);

        if(this.snake.dead == true){
            this.Start();
        }      
    }

    GetRandomCellPosition() {
        let length = this.grid.cells.length;
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        return {x, y};
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

