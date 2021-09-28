export default function newTask(task) {
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';

	const taskName = document.createElement('p');
	taskName.className = 'task-name';
	taskName.innerHTML = task.description;

	const more = document.createElement('i');
  more.classList.add('fa', 'fa-ellipsis-v');

	const taskContainer = document.createElement('li');
	taskContainer.className = 'task-container';

	taskContainer.appendChild(checkbox);
	taskContainer.appendChild(taskName);
	taskContainer.appendChild(more);
	
	return taskContainer;
}