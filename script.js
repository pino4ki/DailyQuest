const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function () {

    const questName = prompt("新しいQuestの名前を入力そてください。");

    const newTodo = document.createElement("p");
    
    newTodo.classList.add("todo");
    
    newTodo.textContent = "□" + questName;

newTodo.addEventListener("click", function() {
    newTodo.textContent = "✅" + newTodo.textContent.substring(1);
});

    todoList.appendChild(newTodo);

});
const todos = document.querySelectorAll(".todo");
todos.forEach(function(todo) {

    todo.addEventListener("click", function() {
      todo.textContent = "✅" + todo.textContent.substring(1);
    });

});