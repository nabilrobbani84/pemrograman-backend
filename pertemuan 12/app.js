// import express and router
const express = require('express');
const router = require('./routes/api');

// buat object express
const app = express();

// import routes
const webRoutes = require("./routes/api");

//menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use routes
app.use("/", webRoutes);

// menggunakan router
app,use(router);

// mendefinisikan port
app.listen(3000, ( => console.log("Listening on port 3000")));