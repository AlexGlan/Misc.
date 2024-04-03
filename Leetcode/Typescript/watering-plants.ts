function wateringPlants(plants: number[], capacity: number): number {
    let wateringCan: number = capacity;
    let steps: number = 0;
  
    for (let i = 0; i < plants.length; i++) {  
        if (wateringCan >= plants[i]) {
            // Water the plant
            steps++
            wateringCan -= plants[i];
        } else {
            // Refill watering can     
            steps += i * 2 + 1;
            // Water the plant after refill
            wateringCan = capacity - plants[i];
        }
    }

    return steps;
};