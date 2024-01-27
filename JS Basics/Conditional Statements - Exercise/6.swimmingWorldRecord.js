function swimmingWorldRecord(input) {
    let recordSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let finalTime = (distance * timePerMeter) + Math.floor(distance / 15) * 12.5

    if (finalTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalTime - recordSeconds).toFixed(2)} seconds slower.`);
    }
}
swimmingWorldRecord(["55555.67", "3017", "5.03"]);