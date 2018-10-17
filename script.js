var enter_button=document.getElementById("enter");
var userinput=document.getElementById("userinput");
var ul=document.querySelector("ul");
var body=document.querySelector("body");




function addListitem() {
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(userinput.value));
	ul.appendChild(li);
	userinput.value="";
	var delbutton=document.createElement("button");
	delbutton.appendChild(document.createTextNode("Delete!"));
	li.appendChild(delbutton);
	li.classList.add("item");
	delbutton.addEventListener("click",function () {
	// li.removeChild(li.childNodes[0]);
	delbutton.parentNode.remove();
	});
	
}




function add_item_after_click() {
	if(userinput.value.length > 0){
		addListitem();
	}
}

function add_item_after_keypress(event) {
	if(userinput.value.length > 0 && event.keyCode===13){
		addListitem();
	}
}

enter_button.addEventListener("click",add_item_after_click);
userinput.addEventListener("keypress",add_item_after_keypress);