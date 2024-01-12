function foodDelivery(input) {
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.4;
    let veganMenu = Number(input[2]) * 8.15;
    let totalCost = chickenMenu + fishMenu + veganMenu;

    console.log(totalCost + totalCost * 0.2 + 2.5);
}
foodDelivery(["2 ","4 ","3 "]);