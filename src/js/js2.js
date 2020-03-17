function add() {
    let val = document.getElementById("input_text").value;
    let ul = document.getElementById("shopping-list");
    if (val){
        let element= document.createElement("li");
        element.appendChild(document.createTextNode(val));
        ul.appendChild(element);
    }
    document.getElementById("input_text").value = "";
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
