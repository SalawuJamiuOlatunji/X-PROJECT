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

// message icon onclick show messagesModal
function newMessage(){
    $('#messagesModal').modal ('show');
};
// onclick hide messagesModal and show chatModal
function nextChat(){
    $('#messagesModal').modal ('hide');
    $('#chatModal').modal ('show');
};
// onclick change nextButton backgroundColor and color
let nextButtonColor = document.getElementById("nextButtonColor")
function nextButton(){
    nextButtonColor.style.backgroundColor = "white";
    nextButtonColor.style.color = "black";
};

// angle up onclick shows inboxModal
function newMessageOpen(){
    $('#inboxModal').modal ('show'); 
};


// inbox side
// onclick hide inboxModal
function messageClosed(){
    $('#inboxModal').modal ('hide');
};
// onclick show chatModal
function showChat(){
    $('#chatModal').modal ('show');  
};
// onclick hide inboxModal
function closeInbox(){
    $('#inboxModal').modal ('hide');  
};
// onclick show inboxModal
function undoChat() {
    $('#inboxModal').modal ('show');
};

// onclick hide chatModal
function closeChat(){
    $('#chatModal').modal ('hide');
};
// onclick show chatModal
function directChat(){
    $('#chatModal').modal ('show');
}