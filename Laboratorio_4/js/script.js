/// Referencias de elementos a interactuar

let post = document.getElementById("ButtomPost")

let clear = document.getElementById("ButtomClear")

let mark = document.getElementById("ButtomMark")

let del = document.getElementById("ButtomDelete")

/// Registrar evento

post.addEventListener("click",TodoPost)

clear.addEventListener("click",TodoClear)

mark.addEventListener("click",TodoMark)

del.addEventListener("click",TodoDel)


function TodoPost(e){
    e.preventDefault()

    let todo = document.getElementById("todoText").value
    let list = document.getElementById("todoList")

    let div = document.createElement("div")
    let input = document.createElement("input")
    let label = document.createElement("label")

    input.type = "checkbox"
    input.name = "todo"

    label.textContent = todo

    div.appendChild(input)
    div.appendChild(label)

    list.append(div)
}

function TodoClear(){
    let todos = document.getElementsByName("todo")

    for(let i = 0; i<todos.length; i++){
        todos[i].checked = false
    }
}

function TodoMark(){
    
    let todos = document.getElementsByName("todo")

    for(let i = 0; i< todos.length; i++){
        todos[i].checked = true
    }
}

function TodoDel(){
    
    let todos = document.getElementsByName("todo")

    for(let i = 0; i< todos.length; i++){
        
        if(todos[i].checked){
            todos[i].parentElement.remove()
        }
    }
}