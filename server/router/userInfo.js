const express = require('express');
const router = express.Router();
const connect = require('../db/mysql');
router.post('/userInfo', (req, res) => {
  console.log(req.body);
  connect.query(
    'SELECT * FROM users WHERE username = ?',
    [req.body.name],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: 500, msg: '错误' });
      } else {
        if (result.length !== 0) {
          res.send({ code: 200, msg: '成功', data: result });
        } else {
          res.send({ err: 500, msg: '错误' });
        }
      }
    }
  );
});

module.exports = router;
