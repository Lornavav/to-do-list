/* 
click event for adding to do item to the to do list
alert message for empty input
*/
document.getElementById("additem").onclick = function(){
    if(document.getElementById("input").value.length ==0){
        alert("Add to do item to proceed")
    } else{
        document.getElementById("tasks").innerHTML += `
            <div class ="task">
                <span id="taskname">
                    ${document.getElementById("input").value}
                </span>
            </div>    
        `;
    }
}
