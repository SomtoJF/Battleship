import gameBoard from '../Objects/gameBoard';
import {carrier, destroyer} from '../Objects/ships';

const testBoard = new gameBoard();

describe('Test performance on placement of ships', ()=>{
    beforeAll(()=>{
        return testBoard.place(0,0, new carrier()), 
        testBoard.place(9,0,new destroyer()),
        testBoard.place(5, 2, new destroyer(), false)
    });

    test('Ships can be placed Horizontally', ()=>{
        expect(testBoard.board[0][0]).toEqual(expect.objectContaining({
            length: 5
        }));

        expect(testBoard.board[9][2]).toEqual(expect.objectContaining({
            length: 3
        }));
    });

    test('Ships can be placed vertically', ()=>{
        expect(testBoard.board[7][2]).toEqual(expect.objectContaining({
            length: 3
        }));
    });

    // This is not passing
    test('Cannot place a ship on an occupied area', ()=>{
        expect(()=>{testBoard.place(9,2,new carrier())}).toThrow('Space is occupied by another ship');

        expect(()=>{testBoard.place(9,8,new carrier())}).toThrow('Ship will overflow the grid');

        expect(()=>{testBoard.place(9,0,new carrier(), false)}).toThrow('Space is occupied by another ship');

        expect(()=>{testBoard.place(9,9,new carrier(), false)}).toThrow('Ship will overflow the grid');

        expect(testBoard.board[9][2]).not.toEqual(expect.objectContaining({
            length: 5
        }));

        expect(testBoard.board[7][9]).not.toEqual(expect.objectContaining({
            length: 5
        }));
    });
});