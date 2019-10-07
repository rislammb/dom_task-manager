import './index.css';

window.onload = function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskContainer = document.getElementById('taskContainer');

  taskInput.addEventListener('keypress', function(event) {
    if (event.target.value !== '' && event.keyCode === 13) {
      createTask(taskContainer, event.target.value);
      this.value = '';
    }
  });
  addTaskBtn.addEventListener('click', function() {
    if (taskInput.value) {
      createTask(taskContainer, taskInput.value);
      taskInput.value = '';
    }
  });
};

function createTask(parent, task) {
  let col = document.createElement('div');
  col.className = 'col-sm-6 col-lg-4';

  let singleTask = document.createElement('div');
  singleTask.className = 'single-task d-flex';

  let singleTaskP = document.createElement('p');
  singleTaskP.innerText = task;
  singleTask.appendChild(singleTaskP);

  let span = document.createElement('span');
  span.className = 'ml-auto';
  span.innerHTML = '<i class="fas fa-times-circle"></i>';
  span.addEventListener('click', function() {
    parent.removeChild(col);
  });
  singleTask.appendChild(span);

  let taskControler = createTaskControler(singleTask);
  taskControler.style.visibility = 'hidden';
  singleTask.appendChild(taskControler);

  singleTask.addEventListener('mouseenter', function() {
    taskControler.style.visibility = 'visible';
  });
  singleTask.addEventListener('mouseleave', function() {
    taskControler.style.visibility = 'hidden';
  });

  col.appendChild(singleTask);
  parent.appendChild(col);
}

function createTaskControler(parent) {
  let controlPanel = document.createElement('div');
  controlPanel.className = 'task-control-panel d-flex align-items-center';

  let colorPallete = createColorPallete(parent);
  controlPanel.appendChild(colorPallete);

  let editBtn = createEditBtn(parent);
  controlPanel.appendChild(editBtn);

  return controlPanel;
}

function createColorPallete(parent) {
  let colors = ['palegreen', 'skyblue', 'powderblue', 'salmon', '#76f', '#af7'];
  let colorDiv = document.createElement('div');
  colorDiv.className = 'd-flex';

  colors.forEach(color => {
    let div = document.createElement('div');
    div.className = 'color-circle ml-1';
    div.style.backgroundColor = color;
    div.addEventListener('click', function() {
      parent.style.backgroundColor = color;
    });
    colorDiv.appendChild(div);
  });
  return colorDiv;
}

function createEditBtn(parent) {
  let span = document.createElement('span');
  span.className = 'ml-auto mr-2';
  span.innerHTML = '<i class="fas fa-edit"></i>';
  span.style.color = '#fff';
  span.addEventListener('click', function() {
    let p = parent.querySelector('p');
    let textArea = document.createElement('textarea');
    textArea.className = 'inner-textarea';
    textArea.style.width = parent.offsetWidth + 'px';
    textArea.style.height = parent.offsetHeight + 'px';
    textArea.innerText = p.innerText;

    textArea.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        event.stopPropagation();
        if (this.value) {
          p.innerHTML = this.value;
          parent.removeChild(this);
        } else {
          alert('Please Put some data!');
        }
      }
    });

    parent.appendChild(textArea);
  });

  return span;
}
