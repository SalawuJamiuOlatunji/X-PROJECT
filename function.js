// X
// show signin modal onload
function showModal() {
  $("#modal").modal("show");
}

// load homepage
function redirectToNewPage() {
  setTimeout(() => {
    window.location.href = "homepage.html";
  }, 5000);
}

// message side
// div hoolding messages and angle icon show inbox modal onclick
let message = document.getElementById("message");
message.onclick = function () {
  $("#inboxModal").modal("show");
};

// message icon onclick show messagesModal
function newMessage() {
  $("#messagesModal").modal("show");
}
// onclick hide messagesModal and show chatModal
function nextChat() {
  $("#messagesModal").modal("hide");
  $("#chatModal").modal("show");
}
// onclick change nextButton backgroundColor and color
let nextButtonColor = document.getElementById("nextButtonColor");
function nextButton() {
  nextButtonColor.style.backgroundColor = "white";
  nextButtonColor.style.color = "black";
}

// angle up onclick shows inboxModal
function newMessageOpen() {
  $("#inboxModal").modal("show");
}

// inbox side
// onclick hide inboxModal
function messageClosed() {
  $("#inboxModal").modal("hide");
}
// onclick show chatModal
function showChat() {
  $("#chatModal").modal("show");
}
// onclick hide inboxModal
function closeInbox() {
  $("#inboxModal").modal("hide");
}
// onclick show inboxModal
function undoChat() {
  $("#inboxModal").modal("show");
}

// onclick hide chatModal
function closeChat() {
  $("#chatModal").modal("hide");
}
// onclick show chatModal
function directChat() {
  $("#chatModal").modal("show");
}

// USER SELECTOR
const userList = document.querySelector("#inboxModalBody");
const users = document.querySelectorAll(".inboxUsersMessages");
const userId = document.querySelector("#chatUser");

// MESSAGE SELECTOR
const send = document.querySelector("#text");
const outPut = document.querySelector("#chatModalBody");
const sender = document.querySelector("#chatInput");

//This will go through the list of users and takes the clicked user Username and Email and display it in the DM
users.forEach((user) => {
  user.addEventListener("click", (e) => {
    const userName = user.querySelector("#userName").textContent.trim();
    const email = user.querySelector("#email").textContent.trim();

    userId.querySelector("#userName").innerHTML = `${userName}`;
    userId.querySelector("#email").innerHTML = `${email}`;
  });
});

//This listen to a submit event and calls the ui function to display the messages it holds
sender.addEventListener("submit", (e) => {
  e.preventDefault();
  const messages = send.value.trim();
  console.log("Submitted:", messages);
  if (!messages) return;
  // let chatHistory = JSON.parse(localStorage.getItem('data'))||[];
  // chatHistory.push(messages);
  // localStorage.setItem('data',JSON.stringify(chatHistory));
  ui(messages);
  send.value = "";
});

//This function displays the messages
const ui = (message) => {
  const html = `<div class=" me-2 rounded d-flex bg-primary justify-content-end align-items-center">
     <span>${message}</span>
     <i class="far fa-trash-alt bg-danger btn-btn delete"></i>
     </div><br>`;
  outPut.innerHTML += html;
};

// window.addEventListener('DOMContentLoaded',()=>{
//     const savedMessages = JSON.parse(localStorage.getItem('data')) || [];
//     if(savedMessages){
//         savedMessages.forEach(message=>ui(message));
//     }
// });

//This (delete button) will delete the displayed message  and localstorage
outPut.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    localStorage.removeItem("data");
  }
});
// This refresh the modal only when ctrl r is pressed
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "r") {
    e.preventDefault();
    refreshModal();
  }
});

function refreshModal() {
  outPut.innerHTML = "";
  // const savedMessages =JSON.parse(localStorage.getItem('data')) || [];

  savedMessages.forEach((message) => ui(message));
}
