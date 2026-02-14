let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
let currentIndex = 0;
let showAns = false;

const cardText = document.getElementById("cardText");

function renderCard() {
  if (flashcards.length === 0) {
    cardText.textContent = "No flashcards available";
    return;
  }
  cardText.textContent = flashcards[currentIndex].question;
  showAns = false;
}

function showAnswer() {
  if (flashcards.length === 0) return;
  cardText.textContent = showAns
    ? flashcards[currentIndex].question
    : flashcards[currentIndex].answer;
  showAns = !showAns;
}

function nextCard() {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  renderCard();
}

function prevCard() {
  if (flashcards.length === 0) return;
  currentIndex =
    (currentIndex - 1 + flashcards.length) % flashcards.length;
  renderCard();
}

function addFlashcard() {
  const q = document.getElementById("questionInput").value;
  const a = document.getElementById("answerInput").value;

  if (q === "" || a === "") return alert("Enter both fields");

  flashcards.push({ question: q, answer: a });
  localStorage.setItem("flashcards", JSON.stringify(flashcards));

  document.getElementById("questionInput").value = "";
  document.getElementById("answerInput").value = "";

  currentIndex = flashcards.length - 1;
  renderCard();
}

function deleteFlashcard() {
  if (flashcards.length === 0) return;

  flashcards.splice(currentIndex, 1);
  localStorage.setItem("flashcards", JSON.stringify(flashcards));
  currentIndex = 0;
  renderCard();
}

renderCard();
