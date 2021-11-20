function createTask(){

    let taskName = document.getElementById("task-name").value;
    let taskDesc = document.getElementById("task-desc").value;

    taskCount += 1;

    const task = {
        id: taskCount,
        name: taskName ,
        desc: taskDesc

    };

    return task;

}

function addTask( task ){
    
    const eliminateBtn = document.createElement("button");

    const checkTask = document.createElement("input");

    const checkDesc = document.createElement("label");

    checkTask.setAttribute("type" , "checkbox");

    checkDesc.textContent = "Marcar tarea como completada";

    eliminateBtn.classList.add("fa-trash-alt");

    eliminateBtn.classList.add("fas");

    eliminateBtn.classList.add("button-size");

    const taskDiv = document.createElement("div");

    taskDiv.classList.add("bordes");

    const titleH4 = document.createElement("h4");
    const descP = document.createElement("p");
    const descID = document.createElement("p");

    titleH4.textContent = task.name;
    descP.textContent = task.desc;
    descID.textContent = task.id;

    taskDiv.setAttribute( "id" , taskCount);



    titleH4.style.fontFamily='UItalica'
    descP.style.fontFamily='Ubi'
    descID.style.fontFamily='Ubi'
    checkDesc.style.fontFamily='Ubi'

    taskDiv.append( titleH4 );
    taskDiv.append( descP );
    taskDiv.append( descID );
    taskDiv.append( eliminateBtn );
    taskDiv.append( checkTask );
    taskDiv.append( checkDesc);
  
    penndingTaskDiv.append( taskDiv );

}




let btnAdd = document.getElementById("btn-add");

const penndingTask = [];

const completeTask = [];

let penndingTaskDiv = document.getElementById("pendig-tasks");

let completeTaskDiv = document.getElementById("complete-tasks");

let taskCount = 0;

penndingTaskDiv.addEventListener( "click" , (e) => {

    console.log( e.target.tagName );

    if( e.target.tagName == "BUTTON" ){

        console.log( e.target.parentElement );

        const parent = e.target.parentElement;

        parent.remove();

        alert( "Se eliminara la tarea" );

    } else if( e.target.getAttribute("type") == "checkbox" ){

        const parent = e.target.parentElement;

        let parentId= parent.getAttribute('id');

        let tarea = penndingTask.splice( parentId , 1);

        console.log(tarea);

        completeTask.push( tarea );

        console.log( completeTask );

        parent.remove();

        completeTaskDiv.append( parent );

    }

} )
  

btnAdd.addEventListener( "click" , () => {

    const task = createTask();

    console.log(task);

    penndingTask.push( task );

    addTask( task );


} );