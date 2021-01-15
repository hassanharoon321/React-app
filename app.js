var unorderList = document.getElementById("unorderList");

function addItems() {
    var todoValue = document.getElementById("todoValue").value;

    var list = document.createElement("li");
    var listText = document.createTextNode(todoValue);
    list.appendChild(listText);
    unorderList.appendChild(list);

    var deleteBtn = document.createElement("button");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    list.appendChild(deleteBtn);
    deleteBtn.setAttribute('onclick','deleteBtn(this)')

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    list.appendChild(editBtn)
    editBtn.setAttribute("onclick","editBtn(this)")

}

function deleteAll(){
    unorderList.innerHTML = ""
}

function deleteBtn(e){
    e.parentNode.remove()
}

function editBtn(e){
    var val = e.parentNode.firstChild.nodeValue;
    var change = prompt("Enter the change value",val);
    e.parentNode.firstChild.nodeValue = change;
    // e.parentNode.childNodes[1].parentNode.firstChild
    
}