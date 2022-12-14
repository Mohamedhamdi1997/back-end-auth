const express = require ("express");
const ConnectDB = require ("./helpers/ConnectDB");

const app = express();

//connect to db
ConnectDB();

//middlewares
app.use(express.json());

//Define Routes
app.use("/register", require('./routes/register'));
app.use("/login", require('./routes/login'));
app.use("/post", require('./routes/post'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`))