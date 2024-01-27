function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]) * 2.6;
    let talkingDoll = Number(input[2]) * 3;
    let bear = Number(input[3]) * 4.1;
    let minion = Number(input[4]) * 8.2;
    let truck = Number(input[5]) * 2;

    let allToysPrice = puzzle + talkingDoll + bear + minion + truck;
    let allToys = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]);

    if (allToys >= 50) {
        let discount = allToysPrice * 0.25;
        allToysPrice = allToysPrice - discount;
    }

    allToysPrice = allToysPrice * 0.9;

    if (allToysPrice >= tripPrice) {
        console.log(`Yes! ${(allToysPrice - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - allToysPrice).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);