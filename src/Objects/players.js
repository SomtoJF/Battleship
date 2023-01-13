import gameBoard from './gameBoard';
import {destroyer, carrier, patrolBoat, battleship} from './ships';

class player {
	constructor() {
		// this.name = name;
		this.gameBoard = new gameBoard();
        this.ships = {
            Destroyer: new destroyer(),
            Carrier: new carrier(),
            PatrolBoat: new patrolBoat(),
            Battleship: new battleship()
        };
	};

    fire(x, y, gameBoard)
    {
        gameBoard.receiveAttack(x, y);
    };

    randomNumber(limit)
    {
        let x = Math.floor((Math.random() * limit));
        return x;
    };

    placeRandomly(iteration = 0)
    {
        const myShips = Object.values(this.ships);
        if(iteration >= myShips.length)
        {
            return
        }
        try{
            const booleanArray = [true, false];
            let x = this.randomNumber(10);
            let y = this.randomNumber(10);
            let booleanIndex = this.randomNumber(2);
            myShips[iteration].damageCount = 0;
            this.gameBoard.place(x, y, myShips[iteration], booleanArray[booleanIndex]);
            return this.placeRandomly(iteration + 1);
        }
        catch(e)
        {
            return this.placeRandomly(iteration);
        };
        
        
    };
};

class computer extends player
{
    constructor()
    {
        super();
    };

    fire (gameBoard){
        let x = this.randomNumber(10);
        let y = this.randomNumber(10);
        try{
            gameBoard.receiveAttack(x,y);
            return [x, y];
        }
        catch(e)
        {
            return this.fire(gameBoard);
        };
    };
    
};

export {player,
computer};