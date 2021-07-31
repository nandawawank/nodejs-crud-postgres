const {
    getStudent,
    insertStudent,
    updateStudent,
    removeStudent
} = require("../models/StudentModel")

const get = (request, response) => {
    getStudent(request)
        .then((data) => {
            response.status(200);
            response.json({
                result: data
            });

            return response;
        })
        .catch((err) => {
            response.status(501);
            response.json({
                error: err
            });

            return response;
        })
}

const add = (request, response) => {
    insertStudent(request)
        .then((data) => {
            response.json({
                result: data
            });
            response.status(201);

            return response;
        })
        .catch((err) => {
            response.json({
                error: err.message
            })
            response.status(501);

            return response;
        })
}

const remove = (request, response) => {
    removeStudent(request)
        .then((data) => {
            response.status(200);
            response.json({
                result: "your data has been deleted"
            })
        })
        .catch((err) => {
            response.status(501);
            response.json({
                error: err
            })
        })
}

const update = (request, response) => {
    updateStudent(request)
        .then((data) => {
            response.status(201);
            response.json({
                result: "your data has been updated"
            });

            return response;
        })
        .catch((err) => {
            response.status(501);
            response.json({
                error: err
            })

            return response;
        });
}

module.exports = {
    get,
    add,
    remove,
    update
}