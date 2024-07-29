// X
function showModal() {
    $('#modal').modal('show');
}

let messages = document.getElementById("messages")
messages.onclick = function(){
    $('#messagesModal').modal ('show');
}

let inbox = document.getElementById("usersMessages")
inbox.onclick = function(){
    $('#inboxModal').modal ('show');
}

let chat = document.getElementById("inboxUsersMessages")
chat.onclick = function () {
    $('#chatModal').modal ('show');
}