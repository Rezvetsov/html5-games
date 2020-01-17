class GameManager {
    interval = null;

    engine = {};
    grid = {};
    apple = {};
    snake = {};

    direction = directions.right;
    
    isPause = true;
    isGameOver = false;
    
    constructor(canvas) {
        this.grid = new Grid();
        this.engine = new Engine(canvas, this.grid);

        let body = document.getElementById('body');
        body.addEventListener('keydown', function (e) {
            gm.GetInput(e);
        });
    }

    Start() {
        this.engine.clear();
        this.snake = new Snake();
        this.apple = new Apple(this.GetRandomCellPosition());
        this.engine.drawGrid(this.grid);
        this.engine.drawSnake(this.snake);
        this.engine.drawApple(this.apple);
    }

    startGame(){
        if(this.isPause == false){
            this.isPause = true;
        } else{
            // Если интервал == null, 
            // то игра еще не начиналась
            if (this.interval == null)
                this.interval = setInterval("gm.NextFrame()", 100);

            if(this.isGameOver == true){
                this.Start();
                this.isGameOver = false;
            }
            this.isPause = false;
        }
    }

    gameOver(){
        this.isPause = true;
        this.isGameOver = true;
    }

    NextFrame(){
        console.log('here');     
        if(this.isPause == false){
            this.snake.move(this.direction);
            this.engine.clear();
            this.engine.drawGrid(this.grid);
            this.engine.drawSnake(this.snake);

            if (this.apple.eaten == true) {
                this.apple = new Apple(this.GetRandomCellPosition());
            }
            this.engine.drawApple(this.apple);

            if (this.snake.dead == true) {
                this.gameOver();
            }
        }
    }

    GetRandomCellPosition() {
        let length = this.grid.cells.length;
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        return {x, y};
    }

    GetInput(e) {        
        if (e.keyCode == '32'){
            this.startGame();
        }

        /* Movement */      
        // Up
        if (e.keyCode == '87' || e.keyCode == '38'){
            this.direction = directions.up;     
        } 
        // Right
        else if (e.keyCode == '68' || e.keyCode == '39') {
            this.direction = directions.right;     
        } 
        // Down
        else if (e.keyCode == '83' || e.keyCode == '40') {
            this.direction = directions.down;     
        } 
        // Left
        else if (e.keyCode == '65' || e.keyCode == '37') {
            this.direction = directions.left;     
        }
    }
}

