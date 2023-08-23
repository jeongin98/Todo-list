const list_Ul = document.getElementById('list_Ul');

function addList() {
    // 입력 받은 todo 내용
    const inputBoxText = document.getElementById('inputBox').value;
    // list에 추가
    const newLi = document.createElement('li');
    const newText = document.createTextNode(inputBoxText);
    newLi.appendChild(newText);
    list_Ul.appendChild(newLi);
    // 입력 후 입력창 지우기
    inputBox.value = "";
}

// 리스트 클릭시 취소선
list_Ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});