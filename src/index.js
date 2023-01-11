import './Styles/index.css';
import { player, computer } from './Objects/players';
import { renderGameBoardShips, getUIArray, displayShots } from './DOM/gameboardUI';

const PLAYER = new player();
const PLAYER_BOARD = PLAYER.gameBoard;
const PLAYER_BOARD_UI = getUIArray(document.getElementById('playerBoard'));
const PLAYER_DESTROYER = PLAYER.ships.Destroyer;
const PLAYER_CARRIER = PLAYER.ships.Carrier;
const PLAYER_PATROL_BOAT = PLAYER.ships.PatrolBoat;
const PLAYER_BATTLESHIP = PLAYER.ships.Battleship;

const COMPUTER = new computer();
const COMPUTER_BOARD = COMPUTER.gameBoard;
const COMPUTER_BOARD_UI = getUIArray(document.getElementById('computerBoard'));
const COMPUTER_DESTROYER = COMPUTER.ships.Destroyer;
const COMPUTER_CARRIER = COMPUTER.ships.Carrier;
const COMPUTER_PATROL_BOAT = COMPUTER.ships.PatrolBoat;
const COMPUTER_BATTLESHIP = COMPUTER.ships.Battleship;

PLAYER.placeRandomly();
COMPUTER.placeRandomly();

COMPUTER_BOARD_UI.forEach((element, index)=>{
    let x = index;
    element.forEach((element, index)=>
    {
        let y = index;
        element.addEventListener('click', ()=>{
            PLAYER.fire(x, y, COMPUTER_BOARD);
            // display player shots on screen
            displayShots([x, y], COMPUTER_BOARD.board, COMPUTER_BOARD_UI);
            COMPUTER_BOARD.board[x][y] != undefined? COMPUTER_BOARD_UI[x][y].appendChild(document.createElement('div')): null;

            const firedCoords = COMPUTER.fire(PLAYER_BOARD);
            // display computer shots on screen
            displayShots(firedCoords, PLAYER_BOARD.board, PLAYER_BOARD_UI);
        });
    });
});

renderGameBoardShips(PLAYER_BOARD.board, PLAYER_BOARD_UI);
// renderGameBoardShips(COMPUTER_BOARD.board, COMPUTER_BOARD_UI);