const PORT = process.env.PORT;

const express = require("express");
const app = express();

app.get("/" , (req , res) => {
    res.end("Hello World");
});

app.listen(PORT , () => {
    console.log('Application PORT :' , PORT);
});
