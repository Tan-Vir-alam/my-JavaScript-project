const scoreInput = document.getElementById("score");
const calculateBtn = document.getElementById("calculate-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");



calculateBtn.addEventListener("click", function () {
    if (isEmptyInput()) {
        alert("Input is Empty.");
        return;
    }

    const score = parseFloat(scoreInput.value);

    if (isInvalidMarks(score)) {
        alert("Please type your marks: ");
        return;
    }

    const grade = calculateGrade(score);

   
    //result.innerText = Your grade is: ${grade};

    result.innerText="Your Grade is "+grade;
   
});

function isEmptyInput() {
    return !scoreInput.value.trim();
}

function isInvalidMarks(marks) {
    if (isNaN(marks) || marks < 0 || marks > 100) 
        return "Invalid Marks"; 
}

function calculateGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return "A+";
    } else if (marks >= 70 && marks < 80) {
        return "A";
    } else if (marks >= 65 && marks < 70) {
        return "A-";
    } else if (marks >= 60 && marks < 65) {
        return "B";
    } else if (marks >= 50 && marks < 60) {
        return "C";
    } else {
        return "F";
    }
};

resetBtn.addEventListener("click", function () {
    scoreInput.value = "";
    result.textContent = "";
    resetErrorStyles();
  });