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

    #canBePlaced(x, y, length, isHorizontal)
    {
        const myBoard = this.board;
        isUnoccupied();
        isLocationValid();


        function isUnoccupied()
        {
            if(isHorizontal == true)
            {
                for(let i = 0; i < length; i++){
                    if(myBoard[x][y + i] != undefined)
                    {
                        throw new Error('Space is occupied by another ship')
                    };
                };
            }
            else{
                for(let i = 0; i < length; i++){
                    if(myBoard[x + i][y] != undefined)
                    {
                        throw new Error('Space is occupied by another ship')
                    };
                };
            };
            
        };

        function isLocationValid(){
            if(isHorizontal == true && ((y + length) > 9))
            {
                throw new Error('Ship will overflow the grid')
            };
            
            if(isHorizontal == false && ((x + length) > 9))
            {   
                throw new Error('Ship will overflow the grid')
            };

            if(x > 9 || y > 9)
            {
                throw new Error('location does not exist')
            };
            
        };
    };

    place(x, y, ship, isHorizontal = true)
    {
        const length = ship.length;
        try{
            this.#canBePlaced(x, y, length, isHorizontal);
            // let ship occupy all array elements from the start of y which span it's length
            let placementCounter = 0;
            if(isHorizontal == true)
            {
                while(placementCounter < length)
                {
                    this.board[x][y + placementCounter] = ship;
                    placementCounter++;
                };
            }
            else{
                while(placementCounter < length)
                {
                    this.board[x + placementCounter][y] = ship;
                    placementCounter++;
                };
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
// testBoard.place(6,7,{length:5}, false)
// console.log(testBoard.board);
export default gameBoard;