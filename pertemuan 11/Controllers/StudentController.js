const students = require("../data/students");

// membuat class StudentController
class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilka semua Students",
            data: students,
        }
        res.json(data);
    }
    
    Store(req, res) {
        const { nama } = req.body;
    
        const data = {
            message: 'Menambahkan data student: ${nama}',
            data: students,
        };
    
        res.json(data);
    }
    
    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;
        students[id] = nama;
    
        const data = {
            message: 'Mengedit Student is ${id}, nama ${nama}',
            data: students,
        };
    
        res.json(data);
    };
    
    destroy(req, res) {
        const { id } = req.params;
        students.splice(id,1);
    
        const data = {
            message: 'Menghapus Student is ${id}, nama ${nama}',
            data: students,
        };
    
        res.json(data);
    }
}

// membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;

