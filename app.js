const express = require("express");
const bodyParser = require("body-parser");
const listController = require("./controllers/list");
const cookieParser = require("cookie-parser"); // Perlu instalasi: npm install cookie-parser
const session = require("express-session");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

const comments = [];

const checkLoginMiddleware = (req, res, next) => {
  if (req.session.login) {
    next();
  } else {
    res.redirect("/");
  }
};

app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  let name = req.query.name;
  // check user ada di list atau tidak

  const checkUser = listController.checkUserByName(name);

  if (checkUser) {
    res.redirect("/blank");
    return;
  }
  return res.render("home", { name });
});

app.get("/login", (req, res) => {
  return res.render("login");
});

app.post("/login", (req, res) => {
  const { password } = req.body;
  if (password !== "password") {
    return res.redirect("/");
  }
  // set login to cookie /session
  req.session.login = true;

  res.redirect("/lists");
});

// Create a new item in the list
app.post("/comments", (req, res) => {
  const data = req.body;

  comments.push(data);

  return res.status(200).send("Ucapan berhasil diterima!");
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

// Create a new item in the list
app.post("/lists", checkLoginMiddleware, listController.createListItem);

// Read the entire list
app.get("/lists", checkLoginMiddleware, listController.getListItems);

// Delete a specific item from the list
app.post("/lists/:id", checkLoginMiddleware, listController.deleteListItem);

app.get("/blank", (req, res) => {
  return res.render("tidak-diundang");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
