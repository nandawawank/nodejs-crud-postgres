const express = require("express");
const router = express.Router();

const studentController = require("../controllers/StudentController");

router.get('/api/v1/student', studentController.get);
router.get('/api/v1/student/:first_name', studentController.get);

router.post('/api/v1/student', studentController.add);

router.put('/api/v1/student', studentController.update);

router.delete('/api/v1/student', studentController.remove);

module.exports = router;