function repainting(input) {
    let protectiveNylon = (Number(input[0]) + 2)* 1.50;
    let paint = Number(input[1]) * 1.1 * 14.50;
    let paintThinner = Number(input[2]) * 5;

    let materialsSum = protectiveNylon + paint + paintThinner + 0.4
    let workersSum = materialsSum * 0.3 * input[3];

    console.log(workersSum + materialsSum);
}
repainting(["10", "11", "4", "8"]);