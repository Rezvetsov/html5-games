class UI{
    textGameOver = "Game Over";
    textContinue = "Нажмите SPACE, чтобы начать заново";
    engine = null;
    constructor(engine){
        this.engine = engine;
    }
    gameOver(){
        this.engine.shade();
        this.engine.printTextCenter(this.textGameOver);
        this.engine.printTextCenterSub(this.textContinue);
    }

    printStats(currentScore, bestscore, deaths){        
        this.engine.printCurrentScore(`Счет: ${currentScore}`);
        this.engine.printBestScore(`Лучший: ${bestscore}`);
        this.engine.printDeaths(`Попыток: ${deaths}`);
    }
}