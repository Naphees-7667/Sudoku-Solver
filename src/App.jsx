import React, { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';
import Controls from './components/Controls';
import { solveSudoku } from './utils/sudokuSolver';
import { generatePuzzle } from './utils/puzzleGenerator';

const App = () => {
    const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)));
    const [originalBoard, setOriginalBoard] = useState(board);

    const handleCellChange = (row, col, value) => {
        const newBoard = board.map(row => [...row]);
        newBoard[row][col] = value;
        setBoard(newBoard);
    };

    const handleSolve = () => {
        const newBoard = board.map(row => [...row]);
        solveSudoku(newBoard);
        setBoard(newBoard);
    };

    const handleReset = () => {
        setBoard(originalBoard.map(row => [...row]));
    };

    const handleClear = () => {
        setBoard(Array(9).fill().map(() => Array(9).fill(0)));
    };

    const handleGenerate = () => {
        const newPuzzle = generatePuzzle();
        setBoard(newPuzzle);
        setOriginalBoard(newPuzzle);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <h1 className="text-3xl font-bold mb-8">Sudoku Solver</h1>
            <SudokuGrid board={board} onCellChange={handleCellChange} />
            <Controls
                onSolve={handleSolve}
                onReset={handleReset}
                onClear={handleClear}
                onGenerate={handleGenerate}
            />
        </div>
    );
};

export default App;
