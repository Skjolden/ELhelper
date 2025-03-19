export const decimalToBinary = (num: number): string => {
    if (isNaN(num)) return "Invalid number";
    return num.toString(2).padStart(8, '0');
};