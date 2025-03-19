import React, { useState } from "react";
import { decimalToBinary } from "../utils/convert";
import DipSwitches from "./DipSwitches";

const BinaryConverter: React.FC = () => {
    const [decimal, setDecimal] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setDecimal(isNaN(value) ? 0 : value);
    };

    const handleIncrement = () => setDecimal(prev => prev + 1);
    const handleDecrement = () => setDecimal(prev => (prev > 0 ? prev - 1 : 0));

    const binary = decimalToBinary(decimal);
    const showWarning = decimal > 255;

    return (
        <div className="p-4 border rounded shadow-md w-80 mx-auto mt-5 text-center">
            <h2 className="text-lg font-bold mb-2">Decimal to Binary Converter</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
                <button className="bg-gray-300 px-3 py-1 rounded" onClick={handleDecrement}>-</button>
                <input
                    type="number"
                    className="border p-2 w-20 text-center rounded"
                    value={decimal}
                    onChange={handleChange}
                />
                <button className="bg-gray-300 px-3 py-1 rounded" onClick={handleIncrement}>+</button>
            </div>
            {showWarning && <p className="text-red-500 font-bold">Warning: Value exceeds 255!</p>}
            <p className="mt-2 font-semibold">Binary: {binary}</p>
            <DipSwitches binary={binary} />
        </div>
    );
};

export default BinaryConverter;