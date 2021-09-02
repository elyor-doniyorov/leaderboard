import './style.css';
import Board from './board.js';
import leaderBoard from './leaderBoard.js';

const board = leaderBoard();
const root = document.getElementById('root');
root.appendChild(board);

const game = new LeaderBoard();

async function startGame() {
  await game.createGame('my cool game');
}
startGame();

document.getElementById('refreshbtn').addEventListener('click', () => {
  game.displayScores();
}, false);

document.getElementById('addscorebtn').addEventListener('click', () => {
  game.addScore();
}, false);
