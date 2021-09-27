const express = require("express");

const app = express();
app.listen(8000, () => {
    console.log("Server started on port 8000");
});

// static files
app.use(express.static("Public"));
