import './Styles/index.css';
import { player, computer } from './Objects/players';
import { renderGameBoardShips, getUIArray } from './DOM/gameboardUI';

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

// PLAYER_BOARD.place(0,0,PLAYER_CARRIER, false);
// PLAYER_BOARD.place(7,0,PLAYER_PATROL_BOAT);
// PLAYER_BOARD.place(6,5,PLAYER_DESTROYER, false);
// COMPUTER_BOARD.place(0,0,PLAYER_CARRIER, false);
// renderGameBoardShips(COMPUTER_BOARD.board, COMPUTER_BOARD_UI);
// renderGameBoardShips(PLAYER_BOARD.board, PLAYER_BOARD_UI);
// console.log(PLAYER_BOARD_UI);