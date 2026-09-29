
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// ToDoを追加する
addButton.addEventListener("click", function() {

    const questName = prompt("新しいQuestの名前を入力してください。");

    const newTodo = document.createElement("p");

    newTodo.classList.add("todo");

    newTodo.textContent = "□" + questName;

    // 追加したToDoの完了・未完了を切り替える
    newTodo.addEventListener("click", function() {

        if (newTodo.textContent.startsWith("□")) {
            newTodo.textContent = "✅" + newTodo.textContent.substring(1);
        } else {
            newTodo.textContent = "□" + newTodo.textContent.substring(1);
        }

    });

    todoList.appendChild(newTodo);

});

// 最初からあるToDoを取得する
const todos = document.querySelectorAll(".todo");

// 最初からあるToDoの完了・未完了を切り替える
todos.forEach(function(todo) {

    todo.addEventListener("click", function() {

        if (todo.textContent.startsWith("□")) {
            todo.textContent = "✅" + todo.textContent.substring(1);
        } else {
            todo.textContent = "□" + todo.textContent.substring(1);
        }

    });

});
