function generateNumber (max) {
    return Math.floor(Math.random() * (max + 1))
}

function generateProblem() {
    return {
        numberOne: generateNumber(10),
        nemberTwo: generateNumber(10),
        operator: ['+', '-', 'x'][generateNumber(2)]
    }
}