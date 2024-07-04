const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Array of battery counts


// Reducer function to sum up all batteries
const totalBatteries = batteryBatches.reduce((acc, batch) => acc + batch, 0);

console.log(totalBatteries); // 31
