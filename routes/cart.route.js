const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/cart.controller");

router.get("/", auth, controller.get);
router.post("/add", auth, controller.add);
module.exports = router;
