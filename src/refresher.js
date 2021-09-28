export default function refresher() {
  const refresherContainer = document.createElement('div');
  refresherContainer.classList.add('refresher');

  const text = document.createElement('p');
  text.textContent = "Today's things to Do";

  const refresh = document.createElement('i');
  refresh.classList.add('fas', 'fa-sync');

  topDiv.appendChild(text);
  topDiv.appendChild(refresh);

  return topDiv;
}