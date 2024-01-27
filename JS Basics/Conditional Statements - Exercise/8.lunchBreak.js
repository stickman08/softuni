function lunchBreak(input) {
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let timeForLunchAndRest = (breakDuration * 1 / 8) + (breakDuration * 1 / 4);
    let freeTime = breakDuration - timeForLunchAndRest;

    if (freeTime - episodeDuration >= 0) {
        console.log(`You have enough time to watch ${seriesName} and left with ${freeTime - episodeDuration} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration - freeTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf", "48", "60"]);