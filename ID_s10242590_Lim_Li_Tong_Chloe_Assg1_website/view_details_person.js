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
let message_to_help = document.createElement("form")
message_to_help.setAttribute("action", "how_to_help.html")
document.getElementById("how_to_help").appendChild(message_to_help)
let button_message = document.createElement("button")
button_message.setAttribute("class", "message_to_help")
message_to_help.appendChild(button_message)
let mbutton = document.createElement("h4")
let m_button_info = mbutton.innerHTML = "Message to help"
button_message.appendChild(mbutton);