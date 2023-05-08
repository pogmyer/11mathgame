const problemElement = document.querySelector(".problem")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allowed")

let state = {
    score: 0, 
    wrongAnswers: 0
}

function updateProblem() {
    state.currentProblem = generateProblem() 
    problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
    ourField.value = ""
    ourField.focus()
    // generates new problem and stores it in our "state"
    // then renders it to our user interface
    // clears out field getting ready for next answer
    // put the focus on the field again
}

updateProblem()

function generateNumber (max) {
    return Math.floor(Math.random() * (max + 1))
}

function generateProblem() {
    return {
        numberOne: generateNumber(10),
        numberTwo: generateNumber(10),
        operator: ['+', '-', 'x'][generateNumber(2)]
    }
}

ourForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    let correctAnswer
    const p = state.currentProblem
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo
    if (p.operator == "-") correctAnswer = p.numberOne - p.numberTwo
    if (p.operator == "x") correctAnswer = p.numberOne * p.numberTwo

    if (parseInt(ourField.value, 10) === correctAnswer) {
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updateProblem()
    } else {
        state.wrongAnswers++
        mistakesAllowed.textContent = 2 - state.wrongAnswers
    }
}