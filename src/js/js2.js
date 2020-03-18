function add() {
    let val = document.getElementById("input_text").value;
    let ul = document.getElementById("shopping-list");
    let important = document.getElementById("important").checked;
    let not_important = document.getElementById("not-important").checked;
    if (val){
        let element= document.createElement("li");
        if (important){
            element.style.color="red";
        }
        if (not_important){
            element.style["text-decoration"]="underline";
        }

        element.appendChild(document.createTextNode(val));
        ul.appendChild(element);
    }
    document.getElementById("input_text").value = "";
    document.getElementById("important").checked = false;
    document.getElementById("not-important").checked =false;
}

function remove(){
    let val = document.getElementById("delete_text").value;
    let ul = document.getElementById("shopping-list");
    if (parseInt(val)){
        let lis = ul.getElementsByTagName("li");
        if (val != 0 && val <= lis.length){
            lis[val-1].remove();
        }else {
            alert("Item not exist");
        }
    }
}
