import './style.css';
import leaderBoard from './leaderBoard.js'

const board = leaderBoard();
const root = document.getElementById('root');
root.appendChild(board);
