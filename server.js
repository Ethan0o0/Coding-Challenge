const express = require("express");
const app = express();
const port = 4234;

app.set("views", "templates");
app.set("view engine", "html");

app.use(express.urlencoded({ extended: true }));
app.use("/resources", express.static("resources"));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("mainpage.pug")
})

app.get("/main", (req, res) => {
    res.render("mainpage.pug")
})



app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });