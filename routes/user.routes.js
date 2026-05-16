const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

const valid = require("../middlewares/validation.middleware");
const auth = require("../middlewares/auth.middleware");
const allowRoles = require("../middlewares/role.middleware");

const { createUserSchema } = require("../validations/user.validation");

router.get("/", auth, userController.getUsers);
router.get("/:id", auth, userController.getUserById);
router.post(
  "/",
  auth,
  allowRoles("admin"),
  valid.validate(createUserSchema),
  userController.createUser,
);
router.delete(
  "/delete/:id",
  auth,
  allowRoles("admin"),
  userController.deleteUserById,
);
router.put(
  "/update/:id",
  auth,
  allowRoles("admin"),
  valid.validate(createUserSchema),
  userController.updateUserById,
);

module.exports = router;
