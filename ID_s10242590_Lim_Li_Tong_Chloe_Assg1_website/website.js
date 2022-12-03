//index.html
let web_title = document.createElement("h1")
let web_title_info = web_title.innerHTML = "WELCOME TO ACARINGWORLD"
document.getElementById("content").appendChild(web_title)
web_title.setAttribute("class", "title")

let web_info_element = document.createElement("h3")
let web_info = web_info_element.innerHTML = "Information about what we do and what the website is for"
document.getElementById("content").appendChild(web_info_element)
web_info_element.setAttribute("class", "web_info")

let info_web_para = document.createElement("p")
let info_web_info = info_web_para.innerHTML = "People who need help can use this website to post for someone to help.\
 They would have to go through a process to check for their eligibility before posting on the website.\
 After that process, if they are successful, they would be given a CW account for them to post on the website.\
 For people who are interested in getting a CW account, please meet us at this address."
document.getElementById("content").appendChild(info_web_para)
let address = document.createElement("h4")
let address_info = address.innerHTML = "Address:"
document.getElementById("content").appendChild(address)
address.setAttribute("class", "address")


let call_reason = document.createElement("h4")
let call_reason_info = call_reason.innerHTML = "If you are still uncertain about this, please contact us at this number through Whatsapp or call. Thank you."
call_reason.setAttribute("class", "call_reason")
document.getElementById("content").appendChild(call_reason)

let call_number = document.createElement("h4")
let call_number_info = call_number.innerHTML = "Contact number:"
call_number.setAttribute("class", "call_number")
document.getElementById("content").appendChild(call_number)

let sign_in = document.createElement("h4")
let sign_in_info = sign_in.innerHTML = "Sign in:"
document.getElementById("content").appendChild(sign_in)
sign_in.setAttribute("class", "sign_in")




let sign_in_cw = document.createElement("form")
sign_in_cw.setAttribute("class", "sign_in")
document.getElementById("sign_in_havecw").appendChild(sign_in_cw)
sign_in_cw.setAttribute("action", "havecw_page.html")
sign_in_cw.setAttribute("method", "post")
let buttoncw = document.createElement("button")
buttoncw.setAttribute("id", "sign_in_buttons_cw")
sign_in_cw.appendChild(buttoncw)
let cw_button_info = document.createElement("h4")
let cw_info = cw_button_info.innerHTML = "Have CW account"
buttoncw.appendChild(cw_button_info)

let sign_in_nocw = document.createElement("form")
sign_in_nocw.setAttribute("class", "sign_in")
document.getElementById("sign_in_donthavecw").appendChild(sign_in_nocw)
sign_in_nocw.setAttribute("class", "sign_in")
sign_in_nocw.setAttribute("action", "donthavecw_page.html")
sign_in_nocw.setAttribute("method", "post")
let buttonnocw = document.createElement("button")
buttonnocw.setAttribute("id", "sign_in_buttons_no_cw")
sign_in_nocw.appendChild(buttonnocw)
let no_cw_button_info = document.createElement("h4")
let nocw_info = no_cw_button_info.innerHTML = "Don't Have CW account"
buttonnocw.appendChild(no_cw_button_info)



