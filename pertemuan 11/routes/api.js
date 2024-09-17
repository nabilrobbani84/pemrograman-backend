// Import StudentController 
const StudentController = require("../controllers/StudentController");

// import express
const express  = require ("express");

// membuat object router
const router = express.Router();

// membuat object express
const app = express();

/**
 * membuat routing
 * method get menerima 2 params
 * param 1 adalah endpoint
 * param 2 callbcak
 * callback menerima object req dan res
 */

router.get("/", (req, res) => {
    res.send("Hello Express");
});

router.get("/", (req,        res) => {
    res.send("Hello Express");
});

// Routing student 
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);


// Export router 
module.exports = router;