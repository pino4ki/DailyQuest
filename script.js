// Quest追加ボタンを取得
const addButton = document.getElementById("add-quest");

// Quest追加ボタンが押されたとき
addButton.addEventListener("click", function () {
    const questName = prompt("新しいQuestの名前を入力してください");

    // 何も入力されなかった場合
    if (questName === null || questName.trim() === "") {
        return;
    }

    alert("Quest「" + questName + "」を追加します！");
});
