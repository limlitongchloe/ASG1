for (let i = 0; i < 2; i++) {
    let box_you = document.createElement("p")
    document.getElementById("boxes_you").appendChild(box_you)
    box_you.setAttribute("class", "box_you")
    if (i == 1) {
        box_you.innerHTML = "details about person"
    }
    if (i == 0) {
        box_you.innerHTML = "person's face"
    }
}
