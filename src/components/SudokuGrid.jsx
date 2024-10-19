import React from 'react';
import Cell from './Cell';

const SudokuGrid = ({ board, onCellChange }) => {
    return (
        <div className="grid grid-cols-9 gap-1">
            {board.map((row, rowIndex) => (
                row.map((value, colIndex) => (
                    <Cell
                        key={`${rowIndex}-${colIndex}`}
                        row={rowIndex}
                        col={colIndex}
                        value={value}
                        onChange={onCellChange}
                    />
                ))
            ))}
        </div>
    );
};

export default SudokuGrid;
