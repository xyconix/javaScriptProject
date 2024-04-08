document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Mohon masukkan tugas")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id= "taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            `;

            document.querySelector("#newtask input").value = ""
    }

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
           this.parentNode.removeChild(); 
        }
    };

    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
          this.classList.toggle('completed');  
        }
    };
}