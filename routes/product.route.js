const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");
const controller = require("../controllers/product.controller");

const valid = require("../middlewares/validation.middleware");
const auth = require("../middlewares/auth.middleware");
const allowRoles = require("../middlewares/role.middleware");

const { createProductSchema } = require("../validations/product.validation");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post(
  "/",
  upload.single("image"),
  auth,
  allowRoles("admin"),
  valid.validate(createProductSchema),
  controller.create,
);

module.exports = router;
