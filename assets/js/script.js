let tasks = document.getElementById("newitem");
let input = document.getElementById("input");
let removeTask = document.getElementById("remove");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    addItem();
})

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

    input.value = "";

}


