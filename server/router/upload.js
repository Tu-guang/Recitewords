const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/upload', async (req, res) => {
  console.log(req.body);
  res.send({
    code: 200,
    data: req.file,
  });
});

module.exports = router;
