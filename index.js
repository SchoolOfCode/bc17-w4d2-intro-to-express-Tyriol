import helloWorld from "./hello-world.json" with { type: "json" };
import express from "express"; // import the express modules using ES Module syntax
const app = express(); // set a variable to store the express function to make accessing it later cleaner
const port = 3000; // set the port for the server to be accessed from 

// creating a GET request handler when the root/default file is accessed
app.get("/", (req, res) => {
    // respond with a message
    res.send(helloWorld);
})

// creating a handler to open the port for access
app.listen(port, () => {
    // log a message to confirm the server has started
    console.log(`This app is now listening on ${port}...hopefully`);
})