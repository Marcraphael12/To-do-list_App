let current = null;
let targetItem = null;

export function dragStart() {
  current = this;
  current.classList.add('current-active');
}

export function dragEnd() {
  current.classList.remove('current-active');
  current = null;
}
