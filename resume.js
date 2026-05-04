const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");
  toggleBtn.textContent = body.classList.contains("night-mode")
    ? "Switch to Day Mode"
    : "Switch to Night Mode";
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("show");
  });
});
