const express = require('express');
const router = express.Router();

// const auth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    res.render("homepage")
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;