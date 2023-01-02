import {destroyer, carrier, patrolBoat, battleship} from './ships';

class gameBoard
{
    constructor(){
        this.board = this.#emptyBoard();
    };

    #emptyBoard()
    {
        const arr = new Array(10);
        for (let i = 0; i < 10; i++) {
          arr[i] = new Array(10);
        };
        return arr;
    };

    #canBePlaced(x,y,length)
    {
        const myBoard = this.board;
        isUnoccupied();
        isLocationValid();


        function isUnoccupied()
        {
            for(let i = 0; i < length; i++){
                if(myBoard[x][y + i] != undefined)
                {
                    throw new Error('Space is occupied by another ship')
                };
            };
        };

        function isLocationValid(){
            if((y + length) > 9)
            {
                throw new Error('Ship will overflow the grid')
            }
            else if(x > 9 || y > 9)
            {
                throw new Error('location does not exist')
            };
        };
    };

    place(x,y,ship)
    {
        const length = ship.length;
        try{
            this.#canBePlaced(x, y, length);
            let placementCounter = 0;
            // let ship occupy all array elements from the start of y which span it's length
            while(placementCounter < length)
            {
                this.board[x][y] = ship;
                y++;
                placementCounter++;
            };
        }
        catch(e){
            throw new Error(e);
        };
    };
};

// let testBoard = new gameBoard();
// testBoard.place(0,0,{length:5});
// testBoard.place(0,7,{length:3});
// console.log(testBoard.board[0][1]);
export default gameBoard;