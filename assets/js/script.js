//Variables for adding list items and removing list items
let tasks = document.getElementById("newitem");
let input = document.getElementById("input");
let removeTask = document.getElementById("remove");
//Event listener when enter key is pressed
input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    addItem();
})
//Funtion for adding to & managing to do list
function addItem(){
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let remove = document.createElement("i");
    //Adding input text to parent div
    divParent.className = "item";
    divParent.innerHTML = "<div>"+input.value+"</div>";
    //Event listner for striking through a completed list item
    divParent.addEventListener("click", function(){
        divParent.style.textDecoration = "line-through";
    })
    //Add alert for empty input field
    if (input.value === "") {
        alert("Please add to do item to continue!");
        return false;
    }
    //Removng a to do list item witht X icon
    remove.className = "fa-regular fa-circle-xmark";
    remove.addEventListener("click", function(){
        divParent.remove();
    })
    //Add children to parent div
    divChild.appendChild(remove);
    divParent.appendChild(divChild);
    tasks.appendChild(divParent);
    //Clear input field after each entry
    input.value = "";
}
//Function to close pop up message
function hide() {
    document.getElementById("modal").style.display = "none";
}
//Function to display date
function displayDate() {
    let date = new Date()
    date = date.toString().split(" ")
    document.getElementById("date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}
window.onload = function(){
    displayDate()
}
