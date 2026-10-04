//Using express
const express = require('express')

//Create a instance of express
const app = express();

//Define a route
app.get('/',(req, res) => {
    res.send("Hello Kurama")
})

//Start the server
const port = 3000;
app.listen(port, () => {
    console.log("Server is listening to"+port);
})
