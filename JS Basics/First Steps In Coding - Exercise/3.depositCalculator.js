//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
function depositCalculator(input) {
    let interestRate = Number(input[2]);
    let yearInterestRate = interestRate / 100;
    console.log(Number(input[0]) + input[1] * ((input[0] * yearInterestRate) / 12));
}
depositCalculator(["2350", "6 ", "7 "]);