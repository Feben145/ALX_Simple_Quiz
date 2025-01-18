// Define the checkAnswer function
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Feedback element to display the result
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer was selected
    if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
