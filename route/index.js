const express = require('express');
const IndexController = require('../controller');
const router = express.Router();

router.get("/index", IndexController.index)
router.get("/:id", IndexController.show)
router.post("/store", IndexController.store)

module.exports = router;