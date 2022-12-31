// one carrier(5), one battleship(4), one destroyer(3) and two patrol boats(2).

class ship{

    constructor()
    {
        this.length = null;
        this.damageCount = 0;
        this.isSunk = ()=> this.damageCount >= this.length? true : false;
        this.hit = ()=>{
            ++this.damageCount;
        };
    };

};

class destroyer extends ship{
    constructor(){
        super();
        this.length = 3;
    };
};

class carrier extends ship{
    constructor(){
        super();
        this.length = 5;
    };
};

class battleship extends ship{
    constructor(){
        super();
        this.length = 4;
    };
};

class patrolBoat extends ship{
    constructor(){
        super();
        this.length = 2;
    };
};

let playerDestroyer = new destroyer();
let playerCarrier = new carrier();

console.log(playerDestroyer.isSunk());
export {playerDestroyer, playerCarrier, battleship, patrolBoat, carrier, destroyer};