const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {

    const questName = prompt("新しいQuestの名前を入力してください");

    alert("入力されたQuest：" + questName);

});