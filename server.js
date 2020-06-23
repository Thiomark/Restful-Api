const express = require("express");

const app = express();

// something/something => is called routes

// res is from the server
// req is from the client

app.get("/", function (req, res) {
    // NB req comes before res in the arguments
    // Meaning the server responds with "Hello World"

    // res.send means responding by sending something that is in the brackets
    res.send("Hello World");
});

app.get("/api/course", function (req, res) {
    res.send([1, 2, 3]);
});

app.get("/api/course/:id", function (req, res) {
    // :id is an argument or parameter
    // and in order to read a parameter we use res.params.id or whatever the name of the parameter is
    res.send(req.params.id);
});

// We can have more than one parameter in a route
app.get("/api/posts/:year/:month", function (req, res) {
    // :id is an argument or parameter
    // and in order to read a parameter we use res.params.id or whatever the name of the parameter is
    res.send(req.params);
});

// There is also res.query which sorts things by what you want
// api/posts/2020/4?sortVt=name

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}...`);
});
