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

    move(newDiriection){
        console.log(newDiriection);
        this.shrink();
        let prev = this.body[0];

        if (newDiriection == directions.up){
            this.body.unshift(
                new SnakeNode(
                    prev.positionX,
                    prev.positionY - 25)
            );
        }
        else if (newDiriection == directions.right){            
            this.body.unshift(
                new SnakeNode(
                    prev.positionX + 25, 
                    prev.positionY));
        } else if (newDiriection == directions.down){
            this.body.unshift(
                new SnakeNode(
                    prev.positionX,
                    prev.positionY + 25));
        } else if (newDiriection == directions.left) {
            this.body.unshift(
                new SnakeNode(
                    prev.positionX - 25,
                    prev.positionY));
        }
    }

    shrink(){
        this.body.pop();
    }
}