// X
function showModal() {
    $('#modal').modal('show');
}

let messages = document.getElementById("messages")
messages.onclick = function(){
    $('#messagesModal').modal ('show');
}