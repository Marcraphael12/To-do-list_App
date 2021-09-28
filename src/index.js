import _ from 'lodash';
import './style.css';

import refresher from './refresher.js';
import form from './form-inputs.js';
import taskContainer from './new-task.js';
import clearButton from './clear-task.js';
import Task from './task-adder';

const ul = document.createElement('ul');
ul.classList.add('task-list', 'dc');


const container = document.querySelector('.container');
container.appendChild(refresher());
container.appendChild(form());
container.appendChild(ul);
container.appendChild(clearButton());

const body = document.querySelector('body');
body.appendChild(container);

const myTasks = [];
myTasks.push(new Task('Eat', false, 0));
myTasks.push(new Task('Sleep', false, 1));
myTasks.push(new Task('Code', false, 2));
myTasks.push(new Task('Repeat', false, 3));

myTasks.forEach((task) => {
  ul.appendChild(taskContainer(task));
});