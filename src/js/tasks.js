function init() {
    let image = document.createElement("img");
    image.src = "img/flower2.png";
    let span = document.getElementById("new_element");
    span.appendChild(image);

    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for (let i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];// fill with proper code
    }

    let changeSrc = function (event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename == "flower1.png") {
                event.target.src = "img/flower2.png";
            } else if (filename == "flower2.png") {
                event.target.src = "img/flower1.png";
            }
        }
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);

}
