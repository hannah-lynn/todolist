var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.getElementById("ulist");
var list = document.querySelectorAll("li");



function inputLength() {
	return input.value.length;
}

function createTodo() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.className = "listItem";
	var deleteBtn = document.createElement("button");
	deleteBtn.className = "delete";
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBtn);
	ul.appendChild(li);
	input.value = "";
	
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



// for(var i = 0; i < list.length; i++) {
//   list[i].querySelector(".delete").onclick = delOnClick;
// }
// function toggleTodoAfterClick(e) {
// 	if(e.target.classList.contains("listItem")){
// 		var li = e.target;
// 		li.classList.toggle("done");
// 	}
// }

// for(var i = 0; i < list.length; i++) {
// 	list[i].addEventListener("click", toggleTodoAfterClick);
// }

