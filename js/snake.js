const directions = {
    up: 1,
    right: 2,
    down: 3,
    left: 4
};

class Snake {
    direction = directions.right;
    body = new Array();
    appleEaten = 0;
    dead = false;
    constructor() {
        this.body.push(new snakeCell(10, 10));
        this.body.push(new snakeCell(9, 10));
        this.body.push(new snakeCell(9, 9));
        this.body.push(new snakeCell(9, 8));
        obstacles.snake = this;
    }

    /* Перемещение */
    // Передвижение змейки происходит следующим образом:
    // Удаляем хвост змейки (метод shrink)
    // Затем создаем на месте головы змейки новый блок,
    // который направлен в зависимости от полученного
    // от пользователя направления (метод crawl)
    move(inputDirection) {
        this.shrink();
        this.crawl(inputDirection);
        this.detectCollisions();
    }

    detectCollisions(){
        let head = this.body[0];
        
        // Проверяем, съела ли змейка яблоко
        // Если да, то увеличиваем счетчик яблок
        if (head.cellPositionX == obstacles.apple.cell.cellPositionX && head.cellPositionY == obstacles.apple.cell.cellPositionY)
        {
            this.appleEaten++;
            obstacles.apple.eaten = true;
            this.stretch();
        } 
        // Проверяем, врезалась ли змейка сама в себя
        // если где-то да, то змейка умирает ;(
        // Счетчик начинается с 4, 
        // ибо элемент 0 не может пересечься с элементами 1-3
        else{
            for(let i = 4; i < obstacles.snake.body.length; i++){                
                if (head.cellPositionX == obstacles.snake.body[i].cellPositionX && head.cellPositionY == obstacles.snake.body[i].cellPositionY){
                    this.dead = true;
                }
            }
        }
    }
    
    // Отрезать хвост для перемещения
    shrink() {
        this.body.pop();
    }

    stretch(){
        let tail = this.body[this.body.length - 1];
        this.body.push(new snakeCell(
            tail.cellPositionX,
            tail.cellPositionY));
    }
    
    // Добавить голову
    crawl(inputDirection){
        let prev = this.body[0];

        // UP 
        // Если полученное направление равно "вверх"
        if (inputDirection == directions.up) {
            // и предыдущее не равно "вниз"
            // то перемещаем вверх
            if (this.direction != directions.down) {
                this._moveUp(prev);
                this.direction = inputDirection;
            }
            // Иначе пусть продолжает движение "вниз"
            else {
                this._moveDown(prev);
            }
        }
        // DOWN
        else if (inputDirection == directions.down) {

            if (this.direction != directions.up) {
                this._moveDown(prev);
                this.direction = inputDirection;
            }
            else {
                this._moveUp(prev);
            }
        }
        // RIGHT
        else if (inputDirection == directions.right) {
            if (this.direction != directions.left) {
                this._moveRight(prev);
                this.direction = inputDirection;
            }
            else {
                this._moveLeft(prev);
            }
        }
        // LEFT 
        else if (inputDirection == directions.left) {
            if (this.direction != directions.right) {
                this._moveLeft(prev);
                this.direction = inputDirection;
            }
            else {
                this._moveRight(prev);
            }
        }
    }

    _moveUp(prev){
        this.body.unshift(
            new snakeCell(
                prev.cellPositionX,
                prev.cellPositionY - 1));
    }

    _moveDown(prev){
        this.body.unshift(
            new snakeCell(
                prev.cellPositionX,
                prev.cellPositionY + 1));
    }

    _moveLeft(prev){
        this.body.unshift(
            new snakeCell(
                prev.cellPositionX - 1,
                prev.cellPositionY));
    }

    _moveRight(prev){
        this.body.unshift(
            new snakeCell(
                prev.cellPositionX + 1,
                prev.cellPositionY));

    }
}