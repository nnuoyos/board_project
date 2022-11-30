function render() {
    let resultHTML = '';
    let list = [];
    if (mode == 'all') {
        list = taskList;
    } else {
        list = filterList;
    } //필터 함수에서 걸러져서 올라오기 때문에 이렇게 작성 mode == ongoing || mode == done
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete) {
            resultHTML += `<div class="task task-done" id="${list[i].id}">
        <span>${list[i].taskContent}</span>
        <div id="task-board">
                    <div class="task">
                        <div><a href="./content_page.html">우산챙기기</a></div>
                        <div></div>
                    </div>
                </div>
        </div>`;
        } else {
            resultHTML += `<div class="task" id="${list[i].id}">
        <span><a href="./content_page.html">${list[i].taskContent}</a></span>
        
        </div>`;
        }
    }
    document.getElementById('task-board').innerHTML = resultHTML;
}
