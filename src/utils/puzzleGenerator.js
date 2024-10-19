export const generatePuzzle = () => {
    const puzzle = Array(9).fill().map(() => Array(9).fill(0));
    // Add some numbers randomly for demonstration
    for (let i = 0; i < 20; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        const num = Math.floor(Math.random() * 9) + 1;
        if (isValid(puzzle, row, col, num)) {
            puzzle[row][col] = num;
        }
    }
    return puzzle;
};
