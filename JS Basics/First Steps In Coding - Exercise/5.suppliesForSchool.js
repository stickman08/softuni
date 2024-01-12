function suppliesForSchool(input) {
    let promotionPercent = 1 - Number(input[3]) / 100;

    let penPrice = Number(input[0]) * 5.8;
    let markerPrice = Number(input[1]) * 7.2;
    let chemicalPrice = Number(input[2]) * 1.2;

    let totalPrice = penPrice + markerPrice + chemicalPrice;

    console.log(totalPrice * promotionPercent);
}
suppliesForSchool(["2","3","4","30"]);