if (target === 'about-me' || target === 'skills') {
  sidebar.style.display = 'none';
} else {
  sidebar.style.display = 'flex';
}

document.querySelector('button').addEventListener('click', () => {
  const input = document.querySelector('input').value.trim();
  if (input) {
    alert(`Thanks for your message: "${input}"`);
  } else {
    alert("Please enter a message before submitting.");
  }
});
