class Engine {
    static canvas;
    static ctx;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    drawGrid(grid) {        
        for(let i = 0; i < grid.cells.length; i++){
            for(let j = 0; j < grid.cells[i].length; j++){
                let cell = grid.cells[i][j];
                this.drawCell(cell);
            }
        }
    }

    drawCell(cell) {
        this.ctx.fillStyle = cell.color;
        this.ctx.fillRect(cell.positionX, cell.positionY, cell.sizeX, cell.sizeY);
    }

    drawApple(apple) {
        this.ctx.fillStyle = apple.cell.color;
        this.ctx.fillRect(apple.cell.positionX,
            apple.cell.positionY,
            apple.cell.sizeX,
            apple.cell.sizeY);
    }

    drawSnake(snake){
        for (let i = 0; i < snake.body.length; i++){
            let bodyPart = snake.body[i];
            this.ctx.fillStyle = bodyPart.color;
            
            this.ctx.fillRect(
                bodyPart.positionX, 
                bodyPart.positionY,
                bodyPart.sizeX, bodyPart.sizeY);
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    shade(){
        this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    printTextCenter(text){
        this.ctx.font = "72px roboto";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "red";
        let x = this.canvas.width / 2;
        let y = this.canvas.height / 2;
        this._printText(text, x, y);
    }

    printTextCenterSub(text){
        this.ctx.font = "30px roboto";
        let x = this.canvas.width / 2;
        let y = this.canvas.height / 2 + 50;
        this._printText(text, x, y);
    }

    _printText(text, x,y){
        this.ctx.fillText(text, x, y);
    }
}
