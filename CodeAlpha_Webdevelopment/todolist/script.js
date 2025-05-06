const inputBox = document.getElementById("input-holder");
const listItems = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = `<span class="task-text">${inputBox.value}</span>`;
        listItems.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        cross.classList.add("cross");
        li.appendChild(cross);
    }
    inputBox.value = '';
    saveData();
}

listItems.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.classList.contains("cross")){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listItems.innerHTML);
}

function showTask(){
    listItems.innerHTML = localStorage.getItem("data");
}
showTask();