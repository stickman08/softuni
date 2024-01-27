function shopping(input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]) * 250;
    let processor = Number(input[2]) * (videoCard * 0.35);
    let ram = Number(input[3]) * (videoCard * 0.10);

    let totalPrice = videoCard + processor + ram;

    if (Number(input[1]) > Number(input[2])) {
        totalPrice *= 0.85;
    }

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }

}
shopping (["920.45","3","1","1"]);