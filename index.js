function expand(element) {
  element.classList.add('expand');
  element.parentElement.classList.add('expanded')
}

function collapse(element) {
  element.classList.remove('expand');
  element.parentElement.classList.remove('expanded')
}

function toggle() {
  document.querySelectorAll('.expandable').forEach(elem => {
    if (!expanded) {
      expand(elem);
    } else {
      collapse(elem);
    }
  });
  expanded = !expanded;
  if (expanded) {
    detachExpand();
  } else {
    attachExpand();
  }
}

function attachExpand() {
  document.querySelectorAll('.expandable').forEach(elem => {
    elem.parentElement.onmouseover = () => { expand(elem) };
    elem.parentElement.onmouseleave = () => { collapse(elem) };
  });
}

function detachExpand() {
  document.querySelectorAll('.expandable').forEach(elem => {
    elem.parentElement.onmouseover = undefined;
    elem.parentElement.onmouseleave = undefined;
  });
}

function registerGuest() {
  let url = 'https://visitortracker.herokuapp.com/hit';
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.send(null);
}

var expanded = false;
window.onload = function() {
  registerGuest();
  attachExpand();
  document.querySelectorAll('.expandable').forEach(elem => {
    elem.parentElement.classList.add('hasExpandable')
  })
}
