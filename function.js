// X
// show signin modal onload
function showModal() {
    $('#modal').modal('show');
};

// load homepage
function redirectToNewPage() {
    setTimeout(() => {
        window.location.href = "homepage.html";
    }, 5000); 
};

// message side
// div hoolding messages and angle icon show inbox modal onclick
let message = document.getElementById("message")
message.onclick = function(){
    $('#inboxModal').modal ('show');
};

// message icon onclick show center modal
function newMessage(){
    $('#messagesModal').modal ('show');
};

// angle up onclick shows inbox
function newMessageOpen(){
    $('#inboxModal').modal ('show'); 
};


// inbox side
function messageClosed(){
    $('#inboxModal').modal ('hide');
};

function showChat(){
    $('#chatModal').modal ('show');  
};

function closeInbox(){
    $('#inboxModal').modal ('hide');  
};

function undoChat() {
    $('#inboxModal').modal ('show');
};


function closeChat(){
    $('#chatModal').modal ('hide');
};

function directChat(){
    $('#chatModal').modal ('show');
}