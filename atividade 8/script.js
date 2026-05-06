const  taskinput = document.getElementById('taskInput'); //getbyide serve basicamente para buscar em HTML
const taskList = document.getElementById('taskList');//mesma coisa inclusive os IDs se tornão essas costancias

//isso e colocado para que seja 'declarado ' as costantes do HTML antes de codar para ser editado.
//================================================
function addTask(){
 const textInput = taskInput.value.trim();
 if(textInput !== ''){
  const newTask = document.createElement('li'); //esta criando dentro do 
  newTask.innerHTML =   `<span>${textInput}<span>`; //newtack esta colocaando dentro do newtask
  taskList.appendChild(newTask);
 }
}