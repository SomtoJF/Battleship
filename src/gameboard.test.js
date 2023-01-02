import gameBoard from './gameBoard';
import {carrier, destroyer} from './ships';

const testBoard = new gameBoard();

describe('Test performance on placement of ships', ()=>{
    beforeAll(()=>{
        return testBoard.place(0,0, new carrier());
    });

    beforeAll(()=>{
        return testBoard.place(9,0, new destroyer());
    });

    test('Ships can be placed on the board', ()=>{
        expect(testBoard.board[0][0]).toEqual(expect.objectContaining({
            length: 5
        }));
    });

    test('Ships length are taken into account during placement', ()=>{
        expect(testBoard.board[0][4]).toEqual(expect.objectContaining({
            length: 5
        }));

        expect(testBoard.board[9][2]).toEqual(expect.objectContaining({
            length: 3
        }));
    });

    // This is not passing
    test('Cannot place a ship on an occupied area', ()=>{
        expect(()=>{testBoard.place(9,2,new carrier())}).toThrow('Space is occupied by another ship');

        expect(()=>{testBoard.place(9,8,new carrier())}).toThrow('Ship will overflow the grid');

        expect(testBoard.board[9][2]).not.toEqual(expect.objectContaining({
            length: 5
        }));
    });
});