export default function form() {
  const form = document.createElement('form');
  form.classList.add('form');

  const text = document.createElement('input');
  text.classList.add('text-input');
  text.type = 'text';
  text.placeholder = 'Add to your list...';

  const ul = document.createElement('ul');
  ul.classList.add('taskList');

  form.appendChild(text);

  return form;
}