import _ from 'lodash';
import './style.css';

// need drag and funct
  //drag
      //start
      //end
      //leave
      //drag enter

import {
  dragStart,
  allowDrop,
  dragEnd,
  drop,
  dragEnter,
  dragLeave,
} from './dragDrop.js';

import updateStatus from './status.js';

const list = document.getElementById('list');

let todoList = [
  {
    description: 'Have Breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'Grocery shopping',
    completed: false,
    index: 1,
  },
  {
    description: 'Cleaning',
    completed: false,
    index: 2,
  },
  {
    description: 'Feed the Cats',
    completed: false,
    index: 3,
  },
];

function renderList(arr) {
list.innerHTML = arr.map((item) => `<li class='flex-row todo' draggable='true' id='${item.index}'>
<input type='checkbox' class='checkbox' data-id='${item.index}'  ${item.completed ? 'checked' : ''}>
<input type='text' value='${item.description}' data-index='${item.index}'draggable='false' class='todo-text ${item.completed ? 'completed' : ''}'>
<i class='fas fa-ellipsis-v dots' data-id='${item.index}'></i>
</li>`,).join('');

list.addEventListener('dragenter', dragEnter);

  document.querySelectorAll('.todo').forEach((t) => {
    t.addEventListener('dragstart', dragStart);
    t.addEventListener('dragend', dragEnd);
    t.addEventListener('dragenter', dragEnter);
    t.addEventListener('dragleave', dragLeave);
    t.addEventListener('drop', drop);
    t.addEventListener('dragover', allowDrop);
});
