class SnakeNode {
    color = "#0277BD";
        positionX;
        positionY;
        sizeX = 24;
        sizeY = 24;
    constructor(posX, posY){
        this.positionX = posX;
        this.positionY = posY;
    }
}

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
        let c = Cell.cellToGlobalPosition(10, 10);
        this.body.push(new SnakeNode(c.x, c.y));
        c = Cell.cellToGlobalPosition(9, 10);
        this.body.push(new SnakeNode(c.x, c.y));
        c = Cell.cellToGlobalPosition(9, 9);
        this.body.push(new SnakeNode(c.x, c.y));
        c = Cell.cellToGlobalPosition(9, 8);
        this.body.push(new SnakeNode(c.x, c.y));
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
            new SnakeNode(
                prev.positionX,
                prev.positionY - 25));
    }

    _moveDown(prev){
        this.body.unshift(
            new SnakeNode(
                prev.positionX,
                prev.positionY + 25));
    }

    _moveLeft(prev){
        this.body.unshift(
            new SnakeNode(
                prev.positionX - 25,
                prev.positionY));
    }

    _moveRight(prev){
        this.body.unshift(
            new SnakeNode(
                prev.positionX + 25,
                prev.positionY));

    }

    shrink(){
        this.body.pop();
    }
}