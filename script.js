const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function () {

    const questName = prompt("新しいQuestの名前を入力してください");

    const newTodo = document.createElement("p");

    newTodo.textContent = "□" + questName;

    todoList.appendChild(newTodo);

});