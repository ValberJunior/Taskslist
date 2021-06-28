let tasks = []; //array Tasks

let restoure = document.getElementById('restoure');        //restoure Button
restoure.addEventListener('click',rst);

function rst (){
    let input = document.getElementById("input");           //function restoure 
    if(input.value != ''){input.value='';}
}

let addTask = document.getElementById('add');                //Add Task & function
addTask.addEventListener('click',function(){
   let input = document.getElementById('input');
   if(input.value!=''){createTask();}else{alert('Favor, insira uma tarefa!');}
});

let input = document.getElementById('input');
input.addEventListener('keydown',function(event){                        //function Keydown
    if(event.key =='Enter' && input.value!=''){createTask()}
})

function createId( ){
    return Math.floor(Math.random( )*1000); //id
    }


function createTask(){                                            //Function Create Task
let taskName = document.getElementById('input').value ; 

 let task = {id: createId(),
             name: taskName}

   tasks.push(task);
   localStorage.setItem('tasks',JSON.stringify(tasks));
   updateList();                                                                                                                                        
   rst();

}

function updateList( ){

    let list ="<ul>";

   for (task of tasks){

    list += "<li onmouseover='mOn(this)' onmouseout='mOut(this)' id="+task.id+">"+ task.name+ "<button onclick='deleteTask(this)' class='deleteThis' onmouseover='delOn(this)' onmouseout='delOut(this)' id="+task.id+"></button></li>";
    list +="</ul>";
   }

    let update = document.getElementById("content");
     update.innerHTML = list;

    clearAllButton();
    rst();

    document.getElementById("input").value = " ";

}



function clearAllButton(){
    let buttonClearAll = document.getElementById("clearAll");
    if (tasks==""){
    buttonClearAll.style.display="none";  //Disable clearAllButton 
    }
    else if(tasks!=""){
    buttonClearAll.style.display="inline-block";
    }
}



//delete a task

function deleteTask(element){
    let confirmation = window.confirm('Deseja apagar essa tarefa?');

    if(confirmation){
    tasks = tasks.filter(task=>task.id!=element.getAttribute('id'));                   //<< **** OBS2
    };
    localStorage.setItem("tasks",JSON.stringify(tasks));
    updateList();
    clearAllButton();
    rst();
 
}


//delete all

let buttonClearAll = document.getElementById("clearAll");
buttonClearAll.addEventListener("click",cleanAll);

function cleanAll ( ){

    
    let confirmation = confirm("Deseja apagar todas as suas tarefas?") ;

    if(confirmation){
        tasks = [ ];
        alert("Tarefas apagadas!") 
        clearAllButton(); 
        rst();                      
    }     
      

localStorage.setItem("tasks",JSON.stringify(tasks))            
updateList();
}

//loadAll

function loadAll(){

    let elementsTasks = localStorage.getItem("tasks");

if (elementsTasks){
  tasks = JSON.parse(elementsTasks);                                   //<<<<<<----------- **
  updateList();

}
    
}

loadAll( );
rst();

//Some Events;

//title
let title = document.getElementById('title');
title.addEventListener('mouseover',function(){
   
    title.innerHTML = "Escreva sua tarefa abaixo:"
})
title.addEventListener('mouseout',function(){
    
    title.innerHTML = "Comece a Organizar seu dia!"
})

//input was declared in first part of code

input.addEventListener('mouseover', function(){
    input.style.backgroundColor = '#892be2';
})
input.addEventListener('mouseout', function(){
    input.style.backgroundColor = '#892be296';
})

//button add* was declared in first part of code

addTask.addEventListener('mouseover', function(){
    addTask.style.backgroundColor ='#FFFFFF';
})
addTask.addEventListener('mouseout', function(){
    addTask.style.backgroundColor ='#892be296';
})
// change the image
let addButton = document.getElementById('addButton');
addButton.addEventListener('mouseover',function(){
 addButton.src = '../Assets/add2.png';
})

addButton.addEventListener('mouseout',function(){
    addButton.src = '../Assets/add1.png';
   })

//Button rest * was declared
restoure.addEventListener('mouseover',function(){
    restoure.style.backgroundColor = '#FFFFFF';
})
restoure.addEventListener('mouseout',function(){
    restoure.style.backgroundColor = '#892be296';
})
//change the image
let restButton = document.getElementById('restButton');
restButton.addEventListener('mouseover', function(){
    restButton.setAttribute('src', '../Assets/rest2.png');
})

restButton.addEventListener('mouseout', function(){
    restButton.setAttribute('src', '../Assets/rest1.png');
})

// Change the <li> of tasks

function mOn(li){
    li.style.backgroundColor = '#FFFFFF00';
    li.style.color = '#cdcdcd';
}
function mOut(li){
    li.style.backgroundColor = '#892be296';
    li.style.color = 'white';
}

//change the task
function delOn (del){
    del.style.backgroundColor = 'white';
    del.style.backgroundImage ="url('../Assets/trash2.png')"
}

function delOut (del){
    del.style.backgroundColor = '#892be296';
    del.style.backgroundImage ="url('../Assets/trash1.png')"
}

//Button clear All
let delAll = document.getElementById('clearAll');
delAll.addEventListener('mouseover', function(){
    delAll.style.color = '#892be2';
    delAll.style.backgroundColor = 'white';
})

delAll.addEventListener('mouseout', function(){
    delAll.style.color = 'white';
    delAll.style.backgroundColor = '#892be296';
})

//Home

let home = document.getElementById('home');
home.addEventListener('mouseover', function(){
    home.style.backgroundImage = "url('../Assets/home.png')";
})

home.addEventListener('mouseout', function(){
    home.style.backgroundImage = "url('../Assets/home2.png')";
})