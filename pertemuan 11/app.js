// import express
const express  = require ("express");

// import routes
const router = require("./routes/api.js");

// membuat object express
const app = express();

// menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(3000);

app.get("/students", (req, res) => {
    res.send("Menampilkan semua student");
});
app.post("/students", (req, res) => {
    res.send("Menambahkan data student");
});

app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send('mengedit student ${id}');
});
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send('mendelete student ${id}');
});
app.use("/", (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

