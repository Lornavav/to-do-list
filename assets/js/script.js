//Variables for adding list items and removing list items
let tasks = document.getElementById("newitem");
let input = document.getElementById("input");
let removeTask = document.getElementById("remove");
//Event listener when enter key is pressed
input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    addItem();
})
//Funtion for adding a to do task to the list
function addItem(){
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let remove = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = "<div>"+input.value+"</div>";

    remove.className = "fa-regular fa-circle-xmark";
    remove.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(remove);

    divParent.appendChild(divChild);

    tasks.appendChild(divParent);
    //Clear input field after each entry
    input.value = "";

}
//Pop up message
/*let popUp = document.getElementById("popup");

function open() {
    popUp.style.display = "block";
}*/

function hide() {
    document.getElementById("popup").style.display = "none";
}

/*window.onclick = function(event) {
    if(event.target == popUp) {
        popUp.style.display = "block";
    }
}*/

