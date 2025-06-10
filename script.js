

let send = document.getElementById("send")
let message = document.getElementById("message")
let Paragraph = document.querySelector(".center")

send.addEventListener("click",
    function() {
        if(message.value === "") {
            alert("Please Enter your Text")
        }
        else {
            Paragraph.innerHTML = message.value.toUpperCase()
            message.value = '';
      }
    }
)

message.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        send.click()
    }
})