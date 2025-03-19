import React from "react";

interface DipSwitchesProps {
    binary: string;
}

const DipSwitches: React.FC<DipSwitchesProps> = ({ binary }) => {
    const reversedBinary = binary.split('').reverse();

    return (
        <div className="flex gap-2 mt-4 justify-center">
            {reversedBinary.map((bit, index) => (
                <div key={index} className="w-10 h-20 border-2 border-gray-700 flex flex-col items-center relative bg-gray-300 rounded-md">
                    <div
                        className={`w-full h-1/2 transition-all duration-300 rounded-md ${bit === "1" ? "bg-green-500 top-0" : "bg-white bottom-0"}`} 
                        style={{ position: "absolute" }}
                    />
                </div>
            ))}
        </div>
    );
};

export default DipSwitches;