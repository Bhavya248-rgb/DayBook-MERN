const express = require("express");
const router = express.Router();
const {createEntry,getEntries,getEntry,updateEntry} = require("../controllers/entryContoller");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").post(createEntry);

router.route("/").get(getEntries);

router.route("/:id").get(getEntry);

router.route("/:id").put(updateEntry);

module.exports = router;