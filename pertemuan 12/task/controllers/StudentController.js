// import  model Student 
const Student = require("../models/Student");

class StudentController {
    // menambahkan keyword async memberitahu proses asynchronous
    async index(req, res) {
        //memanggil method static all dengan async await
        const students = await Student.all();

        const data = {
            message: "Menampilkan semua students",
            data: students, 
        };
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({
            message: error.sqlMessage,
        });
    }
    
    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create engembalikan data yang baru diinsert,
         * mengebalikan response dalam bentuk json.
         */

        // code here 

        const { nama, nim, email, jurusan } = req.body;
        const data = {
            message: "Menambahkan data student", 
                nama: nama,
                nim: nim,
                email: email,
                jurusan: jurusan,
        };

        try {
            await Student.create(dataReq);
            const data ={
                message: "Add new data students",
                students: [dataReq],
            };
            
            res.json(data);
        } catch (error) {
            console.log(error);
            res.json({
                message: error.sqlMessage,
            });
        }
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: 'Mengedit student id ${id}, nama ${nama',
            data: students,
        };

        const { id } = req.params;
        const { name } = req.body;

        studen.forEEach((student) => {
            if (student.id == id) {
                student.name = name;
            }
        });

        res.json(data);
    }

    destroy(req, res) {
        // TODO 7: Hapus data students 
        
        const { id } = req.params;

        const data = {
            message: 'Meghapus student id ${id}',
            data: students,
        };

        students.forEach((student, index) => {
            if (student.id == id) {
                students.splice(index, 1);
            }
        });

        res.json(data);
    }
}

// membuat object StudentController 
const object = new StudentController();

// Export object StudentController 
module.exports = object;