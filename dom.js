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

    eliminateBtn.classList.add("fa-trash-alt");

    eliminateBtn.classList.add("fas");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("bordes");

    const titleH4 = document.createElement("h4");
    const descP = document.createElement("p");

    titleH4.textContent = task.name;
    descP.textContent = task.desc;

    taskDiv.setAttribute( "id" , taskCount);

    titleH4.style.fontFamily='UItalica'
    descP.style.fontFamily='Ubi'

    taskDiv.append( titleH4 );
    taskDiv.append( descP );
    taskDiv.append( eliminateBtn );

    penndingTaskDiv.append( taskDiv );

}




let btnAdd = document.getElementById("btn-add");

const penndingTask = [];

const completeTask = [];

let penndingTaskDiv = document.getElementById("pendig-tasks");

let taskCount = 0;

penndingTaskDiv.addEventListener( "click" , (e) => {

    console.log( e.target.tagName );

    if( e.target.tagName == "BUTTON" ){

        console.log( e.target.parentElement );

        const parent = e.target.parentElement;

        parent.remove();

        alert( "Se eliminara la tarea" );

    }

} )

btnAdd.addEventListener( "click" , () => {

    const task = createTask();

    console.log(task);

    penndingTask.push( task );

    addTask( task );


} );