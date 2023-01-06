import gameBoard from './gameBoard';

class player {
	constructor(name) {
		this.name = name;
		this.gameBoard = new gameBoard();
        this.fire = (x, y, gameBoard)=> gameBoard.receiveAttack(x, y);
	};
};

class computer extends player
{
    constructor()
    {
        super();
        this.fire = (gameBoard) => {
            try{
                gameBoard.receiveAttack(this.#randomNumber(), this.#randomNumber());
            }
            catch(e)
            {
                gameBoard.receiveAttack(this.#randomNumber(), this.#randomNumber());
            };
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