class gameBoard
{
    constructor(){
        this.board = this.#emptyBoard();
        this.shotsReceived = [];
        this.clear = ()=>{
            this.board = this.#emptyBoard();
            this.shotsReceived = [];
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

    receiveAttack(x, y)
    {
        try{
            const myBoard = this.board;
            this.#isShotBefore(x, y);
            if(myBoard[x][y] != undefined)
            {
                myBoard[x][y].hit();
                this.#recordHit(x, y);
                return 'Hit';
            }
            else{
                this.#recordMiss(x, y);
                return 'Miss';
            };
        }
        catch(e)
        {
            throw new Error(e)
        };
        
    };

    allShipsSunk(){
        const myBoard = this.board;
        for(let i = 0; i < myBoard.length; i++)
        {
            for(let j = 0; j < myBoard[i].length; j++)
            {
                if(myBoard[i][j] !== undefined && myBoard[i][j].isSunk() == false)
                {
                    return false;
                };
            };
        };
        return true;
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
        isLocationValid();
        isUnoccupied();


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
            };

            if(isHorizontal == false)
            {
                for(let i = 0; i < length; i++){
                    if(myBoard[x + i][y] != undefined)
                    {
                        throw new Error('Space is occupied by another ship')
                    };
                };
            };
            
        };

        function isLocationValid(){
            if(x > 9 || y > 9)
            {
                throw new Error('location does not exist')
            };
            
            if(isHorizontal == true)
            {
                if ((y + length) > 9)
                {
                    throw new Error('Ship will overflow the grid')
                };
            };
            
            if(isHorizontal == false)
            {
                if ((x + length) > 9)
                {
                    throw new Error('Ship will overflow the grid')
                };
            };
        };
    };

    #isShotBefore(x, y)
    {
        const myShots = this.shotsReceived;
        for(let i = 0; i < myShots.length; i++){
            if(myShots[i].x == x && myShots[i].y == y)
            {
                throw new Error('Location Shot before');
            };
        };
    };

    #recordHit(x,y)
    {
        const myShots = this.shotsReceived;
        myShots[myShots.length] = {
            x: x,
            y: y,
            isHit: true
        };
    };

    #recordMiss(x,y)
    {
        const myShots = this.shotsReceived;
        myShots[myShots.length] = {
            x: x,
            y: y,
            isHit: false
        };
    };
};

export default gameBoard;