function greaterNumber(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    if (number1 > number2) {
        console.log("Number1");
    } else {
        console.log("Number2");
    }
}
greaterNumber(["2","4"]);