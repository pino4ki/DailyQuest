
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

const xpText = document.getElementById("xp-text");
const xpProgress = document.getElementById("xp-progress");
const levelText = document.getElementById("level-text");

// 現在の経験値
let xp = 350;

// 次のレベルに必要な経験値
const maxXp = 500;

// XPの表示を更新する

function updateXP() {

    const level = 5 + Math.floor(xp / maxXp);

    const currentXP = xp % maxXp;

    levelText.textContent = "Lv." + level;

    xpText.textContent = "XP " + currentXP + "/" + maxXp;

    xpProgress.style.width = (currentXP / maxXp * 100) + "%";

}


// ToDoの完了・未完了を切り替える
function toggleTodo(todo) {

    if (todo.textContent.startsWith("□")) {

        todo.textContent = "✅" + todo.textContent.substring(1);

        xp = xp + 50;

    } else {

        todo.textContent = "□" + todo.textContent.substring(1);

        xp = xp - 50;

    }

    updateXP();

}

// ToDoを追加する
addButton.addEventListener("click", function() {

    const questName = prompt("新しいQuestの名前を入力してください。");

    if (questName === null || questName.trim() === "") {
        return;
    }

    const newTodo = document.createElement("p");

    newTodo.classList.add("todo");

    newTodo.textContent = "□" + questName;

    newTodo.addEventListener("click", function() {

        toggleTodo(newTodo);

    });

    todoList.appendChild(newTodo);

});

// 最初からあるToDoにもクリック機能を付ける
const todos = document.querySelectorAll(".todo");

todos.forEach(function(todo) {

    todo.addEventListener("click", function() {

        toggleTodo(todo);

    });

});

// ページを開いたときにXPバーを更新する
updateXP();
