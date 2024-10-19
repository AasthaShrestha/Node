require("dotenv").config();
const express = require("express"); //requiring express package
const { blogs, sequelize, users } = require("./model");

// const { where } = require("sequelize");

const {
  homePage,
  singleBlog,
  deleteBlog,
  createForm,
  servicePage,
  createBlog,
} = require("./controller/blogController");
const {
  registerUser,
  loginUser,
  renderRegister,
  renderLogin,
} = require("./controller/authController");

const app = express(); //storing it in app, app vanney variable throughout use garxau
const blogRoute = require("./routes/blogRoute");
const authRoute = require("./routes/authRoute");

app.set("view engine", "ejs"); //ejs le behind the scene kk env chainxa gardinxa
require("./model");
app.use(express.urlencoded({ extended: true }));
app.use("", blogRoute); //route link gardiyo
app.use("", authRoute);

// '/' ma gayo vane k dekhauneh vanne kura, req garepaxi response aaunai parne hunxa
app.get("/", homePage);

app.get("/blog/:id", singleBlog);
app.get("/delete/:id", deleteBlog);

app.get("/create", createForm);

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Thanks,</h1>You are in the Contact section");
});

app.get("/services", servicePage);

app.post("/create", createBlog);

app.get("/register", renderRegister);
app.post("/register", registerUser);

app.get("/login", renderLogin);
app.post("/login", loginUser);

app.use(express.static("public/css/"));
app.use(express.static("./storage/"));
//localhost-->127.0.0.1(decimal)
//port number->room number for certain time

app.listen(3000, () => {
  console.log(process.env.USERNAME1);
  console.log("Project suru vayo hai nodejs ko");
});
