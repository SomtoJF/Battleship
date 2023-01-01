import {carrier, destroyer} from './ships';
let playerDestroyer = new destroyer();
let playerCarrier = new carrier();

test('Destroyer length is 3', ()=>{
    expect(playerDestroyer.length).toBe(3);
});

test('Destroyer Floats', ()=>{
    expect(playerDestroyer.isSunk()).toBeFalsy();
});

describe('Test the hit method',()=>{
    beforeAll(()=>{
        return playerCarrier.hit(), playerCarrier.hit(), playerCarrier.hit(), playerCarrier.hit(), playerCarrier.hit();
    });

    test("Ship's damage count increases on hit", ()=>{
        expect(playerCarrier.damageCount).toEqual(5);
    });

    test("Carrier should sink on five hits", ()=>{
        expect(playerCarrier.isSunk()).toBeTruthy();
    });
})