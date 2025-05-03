const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("Please enter a task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box after adding the task
    saveData(); // Call the function to save data in local storage
}


//check finish and delete task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); // Call the function to save data in local storage
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // Remove the task when the × is clicked
        saveData(); // Call the function to save data in local storage
    }
},  false);


//store task in local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Store it in local storage
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Get the data from local storage
}

showTask(); // Call the function to show tasks when the page loads