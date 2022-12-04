var selectedRow = null;

/* submit 버튼을 누르면 실행되는 함수 */
function onFormSubmit(){
  //alert("dddd");
  var formData = readFormData();
  if(selectedRow == null)
    insertNewRecord(formData); /* 입력 폼이 null 이라면 입력 정보가 추가 된다 */
  else
    updateRecord(formData); /* 입력 폼이 null 이 아니라면, 입력 했던 값이  */

    resetForm();  
}

/* form 의 데이터를 읽어오는 함수 */
/* .value : input의 value 값을 받아오기 */
function readFormData() {
  var formData = {};
  formData["title"] = document.getElementById("title").value;
  formData["writer"] = document.getElementById("writer").value;
  formData["content"] = document.getElementById("content").value;
  return formData;
}

/* 데이터 추가 */
function insertNewRecord(data) {
  var table = document.getElementById("listAll").getElementsByTagName('tbody')[0];
  /* 새로 생성된 row가 테이블에 들어갈 위치 table.length를 넣어준다 */
  var newRow = table.insertRow(table.length); /* insertRow : 테이블에 행 추가하기 */
  cell1 = newRow.insertCell(0); /* insertCell : insertRow로 생성된 row(행)에 cell을 추가한다 */
  cell1.innerHTML = data.title; 
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.writer;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.content;
  cell3 = newRow.insertCell(3); /* cell3이 추가 됨과 동시에 수정/삭제 버튼이 같이 생성 됨 */
  cell3.innerHTML = `<a id="page_button" class="edit_button" onClick="onEdit(this)">수정</a>
                     <a id="page_button" class="delete_button" onClick="onDelete(this)">삭제</a>`;
}
/* 데이터 리셋 */
function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("writer").value = "";
  document.getElementById("content").value = "";
  selectedRow = null;
}
/* 수정 함수 */
function onEdit(td) {
  selectedRow = td.parentElement.parentElement; /* td 태그의 부모의 부모 태그 찾기 => table 태그*/
  document.getElementById("title").value = selectedRow.cells[0].innerHTML;
  document.getElementById("writer").value = selectedRow.cells[1].innerHTML;
  document.getElementById("content").value = selectedRow.cells[2].innerHTML;
}
/* 업데이트 */
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.writer;
    selectedRow.cells[2].innerHTML = formData.content;
}
/* 삭제 함수 */
function onDelete(td){
  if(confirm('정말 삭제하시겠습니까?')){
    row = td.parentElement.parentElement;
    document.getElementById("listAll").deleteRow(row.rowIndex); /* deleteRow : 테이블 행 삭제 */
    resetForm();
  }
}
