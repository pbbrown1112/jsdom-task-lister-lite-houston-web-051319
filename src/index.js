document.addEventListener("DOMContentLoaded", () => {

  let task = document.querySelector('#new-task-description');
  let task_label = document.querySelector('.task_label'); 
  let button = document.querySelector('.button');
  let task_list = document.querySelector('#tasks');
  let div_list = document.querySelector('div#list');
  let my_todos_header = document.querySelector('h2');

  let task_description = document.querySelector('#create-task-form');
  new_div = document.createElement("div");
  new_div.setAttribute('style','margin-bottom: 10px;'); 

  task_description.insertBefore(new_div, task_label);


  new_input_label = document.createElement("label");
  new_input_label.innerHTML = 'User: ';

  new_input = document.createElement("input");
  new_input.setAttribute('type','text'); 
  new_input.setAttribute('name','user');
  
  new_div.append(new_input_label);
  new_div.append(new_input);



  button.addEventListener("click", function(event) {
    event.preventDefault();
    
    let user_name = document.createElement('h3');
    user_name.innerHTML = new_input.value;
    user_name.setAttribute('class', 'one')

    if (document.querySelectorAll('.one').length < 1) {
      div_list.insertBefore(user_name, my_todos_header);
    };
    
    var task_element = document.createElement('li');
    task_element.innerText = task.value;

    task_list.append(task_element);
    var delete_task = document.createElement('button')
      delete_task.addEventListener("click", function(event) {
        event.preventDefault();
          this.parentNode.removeChild(task_element);
          this.parentElement.removeChild(delete_task);
      })
    delete_task.innerHTML = 'Delete'
    task_list.append(delete_task)

  });

  button.addEventListener("click", function(e) {
      e.preventDefault();
      alert(task.value);
    });

  
  

  

});
