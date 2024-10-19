import React from 'react';

const Controls = ({ onSolve, onReset, onClear, onGenerate }) => {
    return (
        <div className="mt-8 space-x-4">
            <button
                onClick={onSolve}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
                Solve
            </button>
            <button
                onClick={onReset}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
                Reset
            </button>
            <button
                onClick={onClear}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
                Clear
            </button>
            <button
                onClick={onGenerate}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
                Generate Puzzle
            </button>
        </div>
    );
};

export default Controls;
