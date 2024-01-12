function fishTank(input) {
    let filled = 1 - Number(input[3]) / 100;

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);

    let volume = length * width * height / 1000;

    console.log(volume * filled);

}
fishTank(["85","75","47","17"]);