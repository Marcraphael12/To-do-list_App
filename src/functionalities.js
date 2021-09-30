class TodoList {
  constructor() {
    this.TaskList = [];
  }

  createTask(task) {
    this.TaskList.push(task);
    localStrorage.setItem('Tasks',JSON.stringify(this.TaskList));
    this.displayTask();
  }

  removeTask() {
    this.TaskList.filter((task) => task.index !== index);
    localStrorage.setItem('Tasks',JSON.stringify(this.TaskList));
    this.displayTask();
  }

  displayTask() {
    const taskGroup = document.querySelector('.task-group');
    this.TaskList.forEach((task) => {
      taskGroup.appendChild(this.simpleTask(task));
    });
  }

  simpleTask() {
    const theTask = document.createElement('li');
    theTask.classList.add('the-task', 'di', 'font', 'btm-bdr');

    const checkBox = documen.createElement('input');
    checkBox.value = false;

    const string = document.createElement('p');
    string.classList.add('font', 'di', 'task-name');

    const taskMenu = document.createElement('button');
    taskMenu.classList.add('font', 'task-menu');
    taskMenu.innerHTML = `<i class="fas fa-ellipsis-v"></i>`;

    const trash = document.createElement('button');
    trash.classList.add('font', 'trash', 'dn');

    taskMenu.addEventListener('over', () => {
      taskMenu.classList.toogle('dn');
      trash.classList.toogle('di');
    });

    trash.addEventListener('click', () => {
      this.removeTask(task.index);
    });

    theTask.appendChild(checkBox);
    theTask.appendChild(string);
    theTask.appendChild(taskMenu);
    theTask.appendChild(trash);

    return theTask;
  }
}
