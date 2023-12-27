// import StudentController
const StudentController = require('../controllers/StudentController');

const expres = require('expres');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome to Student API');
});

// student routes
router.get('/students', StudentController.index);
router.post('/students', StudentController.store);
router.put('/students/:id', StudentController.update);
router.delete('/students/:id', StudentController.destroy);

// export router
module.exports = router;