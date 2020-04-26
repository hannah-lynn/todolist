var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.getElementById("ulist");
var list = document.querySelectorAll("li");



function inputLength() {
	return input.value.length;
}

function createTodo() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + ""));
	li.className = "listItem";
	var deleteBtn = document.createElement("button");
	deleteBtn.className = "delete";
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBtn);
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", toggleTodoAfterClick);
	
}

function addTodoAfterClick() {
	if (inputLength() > 0) {   
		createTodo()
	}
}

function addTodoAfterKeypress (event) {
	if (inputLength() > 0 && event.which === 13) {
		createTodo()
	}
}


function toggleTodoAfterClick() {
        this.classList.toggle("done");
    }



function delOnClick(e) {
	if(e.target.classList.contains("delete")){
		var li = e.target.parentElement;
			ul.removeChild(li);
	}
}

list.forEach(function(li){
	li.addEventListener("click", toggleTodoAfterClick);
});

ul.addEventListener("click", delOnClick);

button.addEventListener("click", addTodoAfterClick);

input.addEventListener("keypress", addTodoAfterKeypress);




