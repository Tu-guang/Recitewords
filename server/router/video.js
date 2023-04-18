const express = require('express');
const router = express.Router();
const connect = require('../db/mysql');
router.post('/getVideo', (req, res) => {
  console.log(req.body);
  connect.query('SELECT * FROM video', (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: 500, msg: '错误' });
    } else {
      res.send({ code: 200, msg: '成功', data: result });
    }
  });
});

module.exports = router;
