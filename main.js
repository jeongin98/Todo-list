const list_Ul = document.getElementById('list_Ul');

// 전역 변수로 바꾸는 방법?
function addList() {

    // 입력 받은 todo 내용
    const inputBoxText = document.getElementById('inputBox').value;
    // list에 추가
    const newLi = document.createElement('li');
    const newText = document.createTextNode(inputBoxText);
    newLi.appendChild(newText);
    list_Ul.appendChild(newLi);





}
