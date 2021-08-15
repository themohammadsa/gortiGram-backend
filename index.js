const express = require('express');
const mongoose = require("mongoose")
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

const UserRouter = require("./routes/user.route")
const PostRouter = require("./routes/post.route")
const ProfileRouter = require("./routes/profile.route")
const { databaseConnection } = require("./database/databaseConnection.connect.js")
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

databaseConnection();

app.use("/user", UserRouter);
app.use("/post", PostRouter);
app.use("/profile", ProfileRouter);

app.get('/', (req, res) => {
  res.send('Please visit "https://gortigram.netlify.app/" to view the application. ')
});


app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});
