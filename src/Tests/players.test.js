import { player, computer } from "../Objects/players";
import {battleship, patrolBoat, carrier, destroyer} from '../Objects/ships'

const somto = new player('somto');
const computerAI = new computer();

beforeAll(()=>{
    return somto.gameBoard.place(0,0, new carrier()),
    somto.gameBoard.place(2, 5, new destroyer(), false),
    computerAI.gameBoard.place(0,0, new carrier()),
    computerAI.gameBoard.place(2, 5, new destroyer(), false),
    somto.fire(0, 0, computerAI.gameBoard),
    computerAI.fire(somto.gameBoard)
});

test('Computer gameboard receives attack', ()=>{
    expect(computerAI.gameBoard.board[0][0]).toEqual(expect.objectContaining({
        damageCount: 1
    }));
});

for(let i = 0; i < 50; i++)
{
    test('Player gameboard receives attack', ()=>{
        expect(somto.gameBoard.shotsReceived.length).toEqual(i + 1);
        let coords = computerAI.fire(somto.gameBoard);
        // console.log(coords);
    });
}

