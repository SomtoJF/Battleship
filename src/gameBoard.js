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
};

let testBoard = new gameBoard();