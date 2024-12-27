// Grade Calculator Logic
function calculateGrade() {
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);
    const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);

    if (isNaN(totalMarks) || isNaN(obtainedMarks) || totalMarks <= 0 || obtainedMarks < 0 || obtainedMarks > totalMarks) {
        document.getElementById('result').innerText = "Invalid input. Please enter valid marks.";
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = "";

    if (percentage >= 90 && percentage <= 100) {
        grade = "A+";
    } else if (percentage >= 80 && percentage <= 89) {
        grade = "A";
    } else if (percentage >= 70 && percentage <= 79) {
        grade = "B+";
    } else if (percentage >= 60 && percentage <= 69) {
        grade = "B";
    } else if (percentage >= 55 && percentage <= 59) {
        grade = "C+";
    } else if (percentage >= 45 && percentage <= 54) {
        grade = "C";
    } else if (percentage >= 40 && percentage <= 44) {
        grade = "D";
    } else if (percentage < 40) {
        grade = "E";
    } else {
        grade = "Invalid percentage calculation.";
    }

    document.getElementById('result').innerText = `Percentage: ${percentage.toFixed(2)}% \nGrade: ${grade}`;
}

// Calculator Logic
let calcInput = "";

function addToInput(value) {
    calcInput += value;
    document.getElementById('calcInput').value = calcInput;
}

function clearInput() {
    calcInput = "";
    document.getElementById('calcInput').value = "";
    document.getElementById('calcResult').innerText = "";
}

function calculateTotal() {
    try {
        const total = eval(calcInput.replace(/[^0-9+]/g, ""));
        document.getElementById('calcResult').innerText = `Total: ${total}`;
        calcInput = total.toString();
        document.getElementById('calcInput').value = calcInput;
    } catch {
        document.getElementById('calcResult').innerText = "Invalid input.";
    }
}

function passResult() {
    const calcResultText = document.getElementById('calcResult').innerText;
    const resultMatch = calcResultText.match(/Total: ([\d.-]+)/);

    if (resultMatch && !isNaN(parseFloat(resultMatch[1]))) {
        document.getElementById('obtainedMarks').value = parseFloat(resultMatch[1]);
        alert("Calculator total passed to Obtained Marks!");
    } else {
        alert("No valid calculator total to pass.");
    }
}
