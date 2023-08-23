const list_Ul = document.getElementById('list_Ul');

function addList() {
    // 입력 받은 todo 내용
    const inputBoxText = document.getElementById('inputBox').value;
    // 입력칸이 비어있을 경우 재입력 알림
    if (inputBoxText == '') { alert("할 일을 입력해주세요"); return; }

    // 입력된 todo 추가
    const newLi = document.createElement('li');
    const newText = document.createTextNode(inputBoxText);

    // Delete 버튼 생성
    const delButton = document.createElement('button');
    delButton.setAttribute("onclick", "deleteToDo(this)");
    delButton.classList.add('deleteToDo');
    delButton.textContent = "x";
    // 부모 노드에 자식 노드 연결
    newLi.appendChild(newText);
    newLi.appendChild(delButton);
    list_Ul.appendChild(newLi);

    // 입력 후 입력창 깨끗하게 비우기
    inputBox.value = "";
}

// 리스트 클릭시 취소선
list_Ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});


// X표시 버튼 클릭시 todo 삭제
function deleteToDo(event) {
    const deleteButton = event; // <Button>
    deleteButton.parentElement.remove(); // <li>
}