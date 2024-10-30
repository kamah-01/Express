const express = require("express");
const app = express();

app.use((req, res) => {
    res.send("welcome to the server");
});

    // starting server
    const PORT = process.env.Port || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`Press Ctrl + C to quit`);
});