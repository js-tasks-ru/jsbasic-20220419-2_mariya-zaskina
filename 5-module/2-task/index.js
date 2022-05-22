function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const elem = document.getElementById('text');
  btn.addEventListener('click', () => elem.hidden = !elem.hidden);
}
