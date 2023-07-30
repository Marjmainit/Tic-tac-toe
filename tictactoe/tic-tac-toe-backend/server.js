const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());





app.get('/api', (req, res) => {
  res.json({ board, xPlaying, scores, gameOver });
});

app.post('/api/click', (req, res) => {
  const { boxIdx } = req.body;
  if (board[boxIdx] === null && !gameOver) {
    const updatedBoard = [...board];
    updatedBoard[boxIdx] = xPlaying ? 'X' : 'O';
    board = updatedBoard;
    xPlaying = !xPlaying;

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === 'O') {
        scores.oScore += 1;
      } else {
        scores.xScore += 1;
      }
      gameOver = true;
    }
  }
  res.json({ board, xPlaying, scores, gameOver });
});

app.post('/api/reset', (req, res) => {
  board = Array(9).fill(null);
  xPlaying = true;
  gameOver = false;
  res.json({ board, xPlaying, scores, gameOver });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
