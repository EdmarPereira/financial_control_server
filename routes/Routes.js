const express = require("express");
const {
  getAllData,
  createData,
  getByIdData,
  updateData,
  deleteByIdData,
} = require("../controllers/data.controller");
 
const router = express.Router();
 
router.route("/data/getAll").get(getAllData)
router.route("/data/create").post(createData);
router.route("/data/get/:id").get(getByIdData)
router.route("/data/update/:id").put(updateData)
router.route("/data/delete/:id").delete(deleteByIdData);
 
module.exports = router;