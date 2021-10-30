let btnAdd = document.getElementById("btn-add");

const penndingTask = [];

const completeTask = [];

let penndingTaskDiv = document.getElementById("pendig-tasks");

let taskCount = 0;

btnAdd.addEventListener( "click" , () => {

    let taskName = document.getElementById("task-name").value;

    let taskDesc = document.getElementById("task-desc").value;

    const task = {

        name: taskName ,
        desc: taskDesc

    };

    penndingTask.push( task );

    console.log( penndingTask );

    taskCount += 1;

    const taskDiv = document.createElement("div");

    const titleH4 = document.createElement("h4");

    const descP = document.createElement("p");

    titleH4.append( taskName );

    descP.append( taskDesc );

    taskDiv.setAttribute( "id" , "tarea");

    taskDiv.append( titleH4 );

    taskDiv.append( descP );

    let penndingTaskDiv = document.getElementById("pendig-tasks");

    penndingTaskDiv.append( taskDiv );


} );