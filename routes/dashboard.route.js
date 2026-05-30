const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const allowRoles = require("../middlewares/role.middleware");

const { getStats } = require("../services/dashboard.service");

router.get("/stats", auth, allowRoles("admin"), async (req, res, next) => {
  const data = await getStats();
  res.json(data);
});
module.exports = router;
