<template>
    <div class="tic-tac-toe-widget">
      <h2>Tic Tac Toe</h2>
      <div class="board">
        <div v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)">
          {{ cell }}
        </div>
      </div>
      <button @click="resetBoard">Reset</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        board: Array(9).fill(''),
        currentPlayer: 'X',
        gameOver: false,
      };
    },
    methods: {
      makeMove(index) {
        if (!this.gameOver && this.board[index] === '') {
          this.board.splice(index, 1, this.currentPlayer);
          this.checkGameOver();
          this.switchPlayer();
        }
      },
      switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      },
      checkGameOver() {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6] // Diagonals
        ];
  
        for (let combination of winningCombinations) {
          const [a, b, c] = combination;
          if (
            this.board[a] !== '' &&
            this.board[a] === this.board[b] &&
            this.board[b] === this.board[c]
          ) {
            this.gameOver = true;
            break;
          }
        }
  
        if (!this.board.includes('') && !this.gameOver) {
          this.gameOver = true;
        }
      },
      resetBoard() {
        this.board.fill('');
        this.currentPlayer = 'X';
        this.gameOver = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .tic-tac-toe-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 300px;
    margin-top: 20px;
  }
  
  .cell {
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 100px;
    cursor: pointer;
  }
  
  .tic-tac-toe-widget button {
    margin-top: 10px;
  }
  </style>
  