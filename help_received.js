let message1 = document.createElement("p")
let message1_info = message1.innerHTML = "We have received help from address:'address' that is for you. Please meet us at 'address of centre' to receive the help you need."
document.getElementById("messages").appendChild(message1)
message1.setAttribute("class", "message_to_cw")

let message2 = document.createElement("p")
let message2_info = message2.innerHTML = "How are you? Hope you are doing well. From user: I am offering money to help you. I would prefer to meet you at 'somewhere' and these are the dates and time i am available, . Hope to see you soon."
document.getElementById("messages").appendChild(message2)
message2.setAttribute("class", "message_to_cw")


