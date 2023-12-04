const express = require("express");
const {
  getGoals,
  setGoal,
  editGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.route("/").get(getGoals).post(setGoal);

router.route("/:id").put(editGoal).delete(deleteGoal);

module.exports = router;
