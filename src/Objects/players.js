import gameBoard from './gameBoard';

class player {
	constructor(name) {
		this.name = name;
		this.gameBoard = new gameBoard();
	};

    fire(x, y, gameBoard)
    {
        gameBoard.receiveAttack(x, y);
    };
};

class computer extends player
{
    constructor()
    {
        super();
    };

    fire (gameBoard){
        let x = this.#randomNumber();
        let y = this.#randomNumber();
        try{
            gameBoard.receiveAttack(x,y);
            return [x, y];
        }
        catch(e)
        {
            this.fire(gameBoard);
        };
    };
    
    #randomNumber()
    {
        let x = Math.floor((Math.random() * 10));
        return x;
    };
};

export {player,
computer};