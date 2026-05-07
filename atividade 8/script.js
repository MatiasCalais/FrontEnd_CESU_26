const  taskinput = document.getElementById('taskInput'); //getbyide serve basicamente para buscar em HTML
const taskList = document.getElementById('taskList');//mesma coisa inclusive os IDs se tornãogf essas costancias

//isso e colocado para que seja 'declarado ' as costantes do HTML antes de codar para ser editado.
//================================================
function addTask(){
 const textInput = taskInput.value.trim();
 if(textInput !== ''){
  const newTask = document.createElement('li'); //esta criando dentro do 
  newTask.innerHTML =   `<span>${textInput}<span>
                        <button onclick="editar()">Editar</burron>
                        <button onclick="remover(this)">Remover</button>
                        <button onclick="conclui(this)">Concluir</button>           `; //newtack esta colocaando dentro do newtask
  taskList.appendChild(newTask);
 }
}

function remover(button){
  
  const itemToRemove = button.parentElement;
  taskList.removeChild(itemToRemove);
}

function concluir(button){
  
  const DeBom = button.parentElement;
  DeBom.classList.toggle('completed');
  
}
