const express = require("express");

const app = express();

app.use(express.json());

const courses = [
    { name: "Javascript Crash Course", id: 1, year: 2019 },
    { name: "Python Crash Course", id: 2, year: 2018 },
    { name: "DenoJs Crash Course", id: 3, year: 2020 },
    { name: "Java Crash Course", id: 4, year: 2015 },
];

// something/something => is called routes

// res is from the server
// req is from the client

app.get("/", function (req, res) {
    // NB req comes before res in the arguments
    // Meaning the server responds with "Hello World"

    // res.send means responding by sending something that is in the brackets
    res.send("Hello World");
});

app.get("/api/courses", function (req, res) {
    res.send(courses);
    // res.send([1, 2, 3])
});

app.get("/api/courses/:id", function (req, res) {
    // :id is an argument or parameter
    // and in order to read a parameter we use res.params.id or whatever the name of the parameter is
    // res.send(req.params.id);

    const course = courses.find(
        (course) => course.id === parseInt(req.params.id)
    );

    if (!course) {
        res.status(404).send("The course you are looking for was not found");
    } else {
        // res.send(req.params.id);
        res.send(course);
    }
});

// We can have more than one parameter in a route
app.get("/api/posts/:year/:month", function (req, res) {
    // :id is an argument or parameter
    // and in order to read a parameter we use res.params.id or whatever the name of the parameter is
    res.send(req.params);
});

app.post("/api/courses", (req, res) => {
    const course = { name: "PHP", id: courses.length + 1, year: 2013 };
    courses.push(course);
    res.send(course);
});

// There is also res.query which sorts things by what you want
// api/posts/2020/4?sortVt=name

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}...`);
});
