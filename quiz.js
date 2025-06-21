function checkAnswer() {
  const correctAnswer = "4"; // Step 2: Define correct answer

  // Step 3: Get user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  
  // Step 4: Handle if no option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 5: Compare and display feedback
  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Step 6: Attach event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
