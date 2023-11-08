const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = 3000;
const mainRouter = require("./Controller/Controllers/MainPage");

app.use(express.static(__dirname + "/Public/Images"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/View");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(
  session({
    secret: "secret_key",
    resave: true,
    saveUninitialized: true,
    cookie: {
      expires: 1000 * 60 * 60,
      httpOnly: true,
      path: "/",
    },
  })
);

app.use(cors());

app.use("/", mainRouter);

const server = app.listen(PORT, (err) => {
  if (err) {
    console.log("Error: ", err.message);
    return;
  }
});
