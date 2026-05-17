const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category.controller");
const valid = require("../middlewares/validation.middleware");
const auth = require("../middlewares/auth.middleware");
const allowRoles = require("../middlewares/role.middleware");


const { createCategorySchema } = require('../validations/category.validation');

router.post(
  "/",
  auth,
  allowRoles("admin"),
  valid.validate(createCategorySchema),
  categoryController.create,
);

router.get("/", categoryController.getAll);


module.exports = router;
