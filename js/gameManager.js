class GameManager {
    interval = null;

    engine = {};
    ui = {};
    grid = {};
    apple = {};
    snake = {};

    direction = directions.right;
    
    isPause = true;
    isGameOver = false;
    isDebug = true;

    deaths = 0;
    bestScore = 0;

    constructor(canvas) {
        this.grid = new Grid();
        this.engine = new Engine(canvas, this.grid);
        this.ui = new UI(this.engine);

        let body = document.getElementById('body');
        body.addEventListener('keydown', function (e) {
            gm.GetInput(e);
        });
    }

    Start() {
        this.direction = directions.right;
        this.engine.clear();
        this.snake = new Snake();
        this.apple = new Apple(this.GetRandomCellPosition());
        this.engine.drawGrid(this.grid);
        this.engine.drawSnake(this.snake);
        this.engine.drawApple(this.apple);
    }

    startGame(){
        if (this.isDebug == true && this.isPause == false){
            this.isPause = true;
            return;
        }
        
        // Если интервал == null, 
        // то игра еще не начиналась
        if (this.interval == null)
            this.interval = setInterval("gm.NextFrame()", 100);

        if(this.isGameOver == true){
            this.isGameOver = false;
            this.Start();
        }
        this.isPause = false;

    }

    gameOver(){
        this.isPause = true;
        this.isGameOver = true;
        this.deaths++;

        if (this.snake.appleEaten > this.bestScore){
            this.bestScore = this.snake.appleEaten;
        }
        this.ui.gameOver();
    }

    NextFrame(){
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

            this.ui.printStats(this.snake.appleEaten, this.bestScore, this.deaths);
        }
    }

    GetRandomCellPosition() {
        let pos = {};
        let isMatch = false;
        do{
            isMatch = false;
            
            pos = this.grid.getRandomCell();
            
            for (let i = 0; i < this.snake.body.length; i++) {
                if (this.snake.body[i].cellPositionX == pos.x
                    && this.snake.body[i].cellPositionY == pos.y) {
                    isMatch = true;
                }
            }
        } while(isMatch == true);

        return pos;
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

