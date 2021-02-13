const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
const ratingsContainer = document.querySelector('.ratings-container');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    selectRating(e.target.parentNode);
  } else if (e.target.classList.contains('rating')) {
    selectRating(e.target);
  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you for your feedback!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});

function selectRating(ratingElement) {
  removeActive();
  ratingElement.classList.add('active');
  selectedRating = ratingElement.querySelector('small').innerText;
}

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove('active'));
}
