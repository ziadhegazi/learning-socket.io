// make connection
const socket = io.connect("http://localhost:8000");

// Query DOM
const message = document.getElementById("message"),
    handle = document.getElementById("handle"),
    btn = document.getElementById("send"),
    output = document.getElementById("output"),
    feedback = document.getElementById("feedback");

// emit events
btn.addEventListener("click", () => {
    socket.emit("chat", { handle: handle.value, message: message.value });
});

message.addEventListener("keypress", () => {
    socket.emit("typing", handle.value);
});

// Listen for events
socket.on("chat", (data) => {
    output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message}</p>`;
    feedback.innerHTML = ``;
});

socket.on("typing", (data) => {
    feedback.innerHTML = `<p><em>${data} is typing ...</em></p>`;
});
