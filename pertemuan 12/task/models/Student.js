// import database 
const db = require('../config/database');

// membuat class model student 
class Student {
    /**
     * membuat method static all
     */
    static all () {
        const query = "SELECT * FROM students";
        db.query(query, (err, results) => {
            const query = 'SELECT * FROM students';
            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    }

    /**
     * TODO 1: Buat fungsi untuk insert data.
     * Method menerima parameter data yang akan diinsert.
     * Method mengembalikan data student yang baru diinsert.
     */

    static create(data) {
        //code here
        return new Promise((resolve,reject) => {
            // add created_at and updated_at 
            data.created_at = new Date();
            data.updated_at = new Date();
            const query = "INSERT INTO students SET ?";

            db.query(query, data, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });


    }
}

// export class student 
module.exports = Student;