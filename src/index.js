import _ from 'lodash';
import './style.css';
import newTask from './AddandRemove.js';

 document.getElementById('input-task').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const v = e.target.value;
    e.target.value = '';
    e.preventDefault();
    newTask(v);
  }
});
