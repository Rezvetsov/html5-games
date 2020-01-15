const directions = {
    up: 1,
    right: 2,
    down: 3,
    left: 4
};

class Snake {
    direction = directions.right;
    body = new Array();
    constructor() {
        this.body.push(new Cell("#0277BD", 10, 10));
        this.body.push(new Cell("#0277BD", 9, 10));
        this.body.push(new Cell("#0277BD", 9,9));
        this.body.push(new Cell("#0277BD", 9,8));
    }

    move(inputDirection){
        this.shrink();
        let prev = this.body[0];

        // UP 
        // Если полученное направление равно "вверх"
        if (inputDirection == directions.up){
            // и предыдущее не равно "вниз"
            // то перемещаем вверх
            if(this.direction != directions.down){
                this._moveUp(prev);
                this.direction = inputDirection;
            }
            // Иначе пусть продолжает движение "вниз"
            else{
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
        else if (inputDirection == directions.right){   
            if(this.direction != directions.left){
                this._moveRight(prev);
                this.direction = inputDirection;
            }
            else{
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
            new Cell(
                "#0277BD",
                prev.cellPositionX,
                prev.cellPositionY - 1));
    }

    _moveDown(prev){
        this.body.unshift(
            new Cell(
                "#0277BD",
                prev.cellPositionX,
                prev.cellPositionY + 1));
    }

    _moveLeft(prev){
        this.body.unshift(
            new Cell(
                "#0277BD",
                prev.cellPositionX - 1,
                prev.cellPositionY));
    }

    _moveRight(prev){
        this.body.unshift(
            new Cell(
                "#0277BD",
                prev.cellPositionX + 1,
                prev.cellPositionY));

    }

    shrink(){
        this.body.pop();
    }
}