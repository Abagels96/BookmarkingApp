// Get parts of the html
const body= document.body;
const form= document.querySelector("#todo");
const input= document.querySelector("#linput");
// const overlay = document.querySelector('.overlay');

const taskList= document.querySelector(".taskList");
console.log(input);
console.log(form);




// add event listeners and tasks to functions
form.addEventListener('submit',getInputFrom);
form.addEventListener('submit', populateTaskList)

// input.addEventListener('focus', focusInput);
// overlay.addEventListener('click', endFocus);



// write the functions

function getInputFrom(event){

   event.preventDefault();
   
// make sure it doesn't reset
   const container= document.createElement('li'); 
   const todo= input.value;
// this is to grab the value from the form input 
   const task=document.createElement('p'); 
   //make sure that the input values have places to go 
  task.className="todoEach";
   task.innerText= todo;

   

   container.appendChild(task);
   taskList.appendChild(container);
form.reset;
console.log(todo);


// }
}

function populateTaskList(tasks=[]){
taskList.innerHTML=tasks
.map(
    (task,idx)=>
    ` <li data-index=${idx}>
    <a class="todoEach >${task.title}</a>
    <button class="close-btn">&times;</button>
  </li>`)  .join('');

}
