const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function () {

    const questName = prompt("新しいQuestの名前を入力してください");

    alert("入力されたQuest：" + questName);

});