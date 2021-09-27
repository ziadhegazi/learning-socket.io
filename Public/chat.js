// make connection
const socket = io.connect("http://localhost:8000");

// Query DOM
const message = document.getElementById("message"),
    handle = document.getElementById("handle"),
    btn = document.getElementById("send"),
    output = document.getElementById("output");

// emit events
btn.addEventListener("click", () => {
    socket.emit("chat", { handle: handle.value, message: message.value });
});

// Listen for events
socket.on("chat", (data) => {
    output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message}</p>`;
});
