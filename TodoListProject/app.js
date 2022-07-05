let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click",e => {
    //prevent form from being submitted
    e.preventDefault();

    //get the input value
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let month = form.children[1].value;
    let day = form.children[2].value;

    if(todoText === "") {
        alert("Wtf are you going to do??? Why are you leaving it empty??? lol");
        return;
    }

    if(month === "") {
        alert("When you going to do??? Why are you leaving it empty??? lol");
        return;
    }

    if(day=== "") {
        alert("When you going to do??? Why are you leaving it empty??? lol");
        return;
    }


    //create a todo
    let todo = document.createElement("div");
    todo.classList.add("todo");

    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;

    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = month + "/" + day;

    todo.appendChild(text);
    todo.appendChild(time);

    //create green check and red trash can
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    
    completeButton.addEventListener("click",e => {
        let todoItem = e.target.parentElement;
        todoItem.classList.toggle("done");
    });

    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    trashButton.addEventListener("click",e=>{
        let todoItem = e.target.parentElement;

        todoItem.addEventListener("animationend",()=>{

            //remove from local storage
            let text = todoItem.children[0].innerText;
            let myListArray = JSON.parse(localStorage.getItem("list"));
            myListArray.forEach((item,index)=>{
                if(item.todoText == text) {
                    myListArray.splice(index,1);
                    localStorage.setItem("list",JSON.stringify(myListArray));
                }
            });

            todoItem.remove();
        });
        
        todoItem.style.animation = "scaleDown 0.3s forwards";
    });

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    todo.style.animation = "scaleUp 0.3s forwards";

    //create an object
    let myTodo = {
        todoText: todoText,
        todoMonth: month,
        todoDate: day
    };

    let myList = localStorage.getItem("list");
    if (myList == null) {
        localStorage.setItem("list",JSON.stringify([myTodo]));
    }
    else {
        let myListArray = JSON.parse(myList);
        myListArray.push(myTodo);
        localStorage.setItem("list",JSON.stringify(myListArray));
    }

    form.children[0].value = "";
    section.appendChild(todo);
});

let sort = document.querySelector("div button");

sort.addEventListener("click",e=>{
    alert("This attribute did not developed yet lmao");
})

let myList = localStorage.getItem("list");
if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach(item => {

        // create a todo
        let todo = document.createElement("div");
        todo.classList.add("todo");
        let text = document.createElement("p");
        text.classList.add(todo-text);
        text.innerText = item.todoText;
        let time = document.createElement("p");
        time.classList.add(todo-time);
        time.innerText = item.todoMonth + "/" + item.todoDate;
        todo.appendChild(text);
        todo.appendChild(time);

        //create green check and red trash can
        let completeButton = document.createElement("button");
        completeButton.classList.add("complete");
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';

        completeButton.addEventListener("click",e => {
            let todoItem = e.target.parentElement;
            todoItem.classList.toggle("done");
        });

        let trashButton = document.createElement("button");
        trashButton.classList.add("trash");
        trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        trashButton.addEventListener("click",e=>{
            let todoItem = e.target.parentElement;
    
            todoItem.addEventListener("animationend",()=>{

                //remove from local storage
                let text = todoItem.children[0].innerText;
                let myListArray = JSON.parse(localStorage.getItem("list"));
                myListArray.forEach((item,index)=>{
                    if(item.todoText == text) {
                        myListArray.splice(index,1);
                        localStorage.setItem("list",JSON.stringify(myListArray));
                    }
                });

                todoItem.remove();
            });
            
            todoItem.style.animation = "scaleDown 0.3s forwards";
        });

        todo.appendChild(completeButton);
        todo.appendChild(trashButton);

        section.appendChild(todo);
    });
}