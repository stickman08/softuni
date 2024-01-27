function sumSeconds(input) {
    let firtsTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firtsTime + secondTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["22", "7", "34"]);