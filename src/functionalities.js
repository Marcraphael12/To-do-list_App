class TodoList {
  constructor() {
    this.TaskList = [];
  }

  createTask(task) {
    this.TaskList.push(task);
    localStrorage.setItem('Tasks', this.TaskList);
    this.displayTask()
  }

  displayTask() {
    const taskGroup = document.querySelector('.task-group');
    this.TaskList.forEach((task) => {
      taskGroup.appendChild(this.simpleTask(task));
    });
  }

  simpleTask() {
    const theTask = document.createElement('li');
    theTask.classList.add('the-task', 'di', 'font');
  }
}



createTask() {

}

saveTask() {

}

getTask() {

}

removeTask() {

}
