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

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("bordes");

    const titleH4 = document.createElement("h4");
    const descP = document.createElement("p");

    titleH4.textContent = taskName;
    descP.textContent = taskDesc;

    taskDiv.setAttribute( "id" , taskCount);

    taskDiv.append( titleH4 );
    taskDiv.append( descP );

    penndingTaskDiv.append( taskDiv );

}

let btnAdd = document.getElementById("btn-add");

const penndingTask = [];

const completeTask = [];

let penndingTaskDiv = document.getElementById("pendig-tasks");

let taskCount = 0;

btnAdd.addEventListener( "click" , () => {

    const task = createTask();

    penndingTask.push( task );

    addTask( task );


} );