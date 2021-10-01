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
