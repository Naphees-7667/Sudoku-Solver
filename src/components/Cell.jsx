import React from 'react';

const Cell = ({ row, col, value, onChange }) => {
    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= 9) {
            onChange(row, col, newValue);
        } else if (e.target.value === '') {
            onChange(row, col, 0);
        }
    };

    return (
        <input
            type="text"
            className="w-10 h-10 text-center border-2 border-gray-300 rounded-sm text-lg"
            value={value === 0 ? '' : value}
            onChange={handleChange}
            maxLength="1"
        />
    );
};

export default Cell;
