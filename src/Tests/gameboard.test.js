import gameBoard from '../Objects/gameBoard';
import {carrier, destroyer} from '../Objects/ships';

// use toContainObject() matcher to test if an array contains a particular object
expect.extend({
    toContainObject(received, argument) {
  
      const pass = this.equals(received, 
        expect.arrayContaining([
          expect.objectContaining(argument)
        ])
      )
  
      if (pass) {
        return {
          message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
          pass: true
        }
      } else {
        return {
          message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
          pass: false
        }
      }
    }
  })

const testBoard = new gameBoard();

describe('Test performance on placement of ships', ()=>{
    beforeAll(()=>{
        return testBoard.place(0,0, new carrier()), 
        testBoard.place(9,0,new destroyer()),
        testBoard.place(5, 2, new destroyer(), false)
    });

    afterAll(()=>{
        return testBoard.clear();
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

    test('Cannot place a ship on an occupied area', ()=>{
        expect(()=>{testBoard.place(9,2,new carrier())}).toThrow('Space is occupied by another ship');

        expect(()=>{testBoard.place(9,8,new carrier())}).toThrow('Ship will overflow the grid');

        expect(()=>{testBoard.place(9,0,new carrier(), false)}).toThrow('Ship will overflow the grid');

        expect(()=>{testBoard.place(10,9,new carrier(), false)}).toThrow('location does not exist');

        expect(testBoard.board[9][2]).not.toEqual(expect.objectContaining({
            length: 5
        }));

        expect(testBoard.board[7][9]).not.toEqual(expect.objectContaining({
            length: 5
        }));
    });
});

describe('Test recieve Attack functions', ()=>{
    beforeEach(()=>{
        return testBoard.place(0, 0, new carrier()),
        testBoard.receiveAttack(0, 1)
    });

    afterEach(()=>{
        return testBoard.clear();
    });

    test('Gameboard receives attack and returns if it as a hit or miss', ()=>{
        expect(testBoard.receiveAttack(0, 3)).toBe('Hit');
        expect(testBoard.receiveAttack(5, 5)).toBe('Miss');
    });

    test('Receiving attacks increments damage Count', ()=>{
        testBoard.receiveAttack(0, 2);
        expect(testBoard.board[0][0].damageCount).toEqual(2);
    });

    test('Shots are being recorded', ()=>{
        expect(testBoard.shots).toContainObject({
            x: 0,
            y: 1,
            isHit: true
        });

        testBoard.receiveAttack(5, 5)
        expect(testBoard.shots).toContainObject({
            x: 5,
            y: 5,
            isHit: false
        });
    });
})