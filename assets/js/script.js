/* jshint esversion: 6 */

//Variables for adding list items and removing list items

let tasks = document.getElementById("newitem");
let input = document.getElementById("input");

//Event listener when enter key is pressed

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    addItem();
});

/** 
* addItem function takes the user input an prints it in the divParent
* Code and inspiration take from Web Dev Tutorials and adapted https://www.youtube.com/watch?v=H5tuwAO-_Kg
*/
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
    });

    //Add alert for empty input field

    if (input.value === "") {
        alert("Please add to do item to continue!");
        return false;
    }

    //Removng a to do list item witht X icon

    remove.className = "fa-regular fa-circle-xmark";
    remove.addEventListener("click", function(){
        divParent.remove();
    });

    //Add children to parent div

    divChild.appendChild(remove);
    divParent.appendChild(divChild);
    tasks.appendChild(divParent);

    //Clear input field after each entry

    input.value = "";
}
/**
 * hide function is triggered by onclick function in index.html
 * when activated the modal will be hidden
 */

function hide() {
    document.getElementById("modal").style.display = "none";
}

/**
 * displayDate function used to display the current date
 * Code and inspiration take from Web Dev Tutorials and adapted https://www.youtube.com/watch?v=SeKQSQDUMDQ
*/

function displayDate() {
    let date = new Date();
    date = date.toString().split(" ");
    document.getElementById("date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}

//displayDate function called on window load

window.onload = function(){
    displayDate();
};
