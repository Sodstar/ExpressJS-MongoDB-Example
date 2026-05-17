const express = require("express");
const router = express.Router();

const controller = require("../controllers/product.controller");

const valid = require("../middlewares/validation.middleware");
const auth = require("../middlewares/auth.middleware");
const allowRoles = require("../middlewares/role.middleware");

const { createProductSchema } = require("../validations/product.validation");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", auth, allowRoles("admin"), valid.validate(createProductSchema), controller.create);

module.exports = router;
