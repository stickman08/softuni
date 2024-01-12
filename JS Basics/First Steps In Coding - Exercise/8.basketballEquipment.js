function basketballEquipment(input) {
    let sumForOneYearOfTraining = Number(input[0])
    let sumForBasketballShoes = Number(input[0]) * 0.6
    let sumForBasketballEquipment = sumForBasketballShoes * 0.8
    let sumForBasketballBall = sumForBasketballEquipment * 0.25
    let sumForBasketballAccessories = sumForBasketballBall * 0.2

    console.log(sumForOneYearOfTraining + sumForBasketballAccessories + sumForBasketballBall + sumForBasketballEquipment + sumForBasketballShoes);
}
basketballEquipment(["365"]);