const Student = require("../entities/Student");
const uuid = require("uuid");


const getStudent = async (request) => {
    if (request.first_name === undefined) {
        return Student.findAll();
    }

    return await Student.findAll({
        where: {
            first_name: request.first_name
        }
    })
}

const insertStudent = async (request) => {
    if (request.body.first_name == undefined) return "first name required";
    if (request.body.last_name == undefined) return "last name required";
    if (request.body.nis == undefined) return "nis required";

    return await Student.create({
        id: uuid.v4(),
        nis: request.body.nis,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        address: request.body.address,
        phone_number: request.body.phone_number
    });
}

const updateStudent = async (request) => {
    if (request.body.first_name == undefined) return "first name required";
    if (request.body.last_name == undefined) return "last name required";
    if (request.body.nis == undefined) return "nis required";

    return await Student.update({
       first_name: request.body.first_name,
       last_name: request.body.last_name,
       address: request.body.address,
       phone_number: request.body.phone_number
    },{
        where: {
            nis: request.body.nis,
            id: request.body.id
        }
    });
}

const removeStudent = async (request) => {
    if (request.body.nis == undefined) return "nis required"
    if (request.body.id == undefined) return "id required"

    return await Student.destroy({
        where: {
            id: request.body.id,
            nis: request.body.nis
        }
    })
}

module.exports = {
    getStudent,
    insertStudent,
    updateStudent,
    removeStudent
}