const express = require('express');
const router = express.Router();
const connect = require('../db/mysql');
router.post('/login', (req, res) => {
  console.log(req.body);
  connect.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: 500, msg: '错误' });
      } else {
        if (result.length !== 0) {
          res.send({ code: 200, msg: '登录成功' });
        } else {
          res.send({ err: 500, msg: '账号密码错误' });
        }
      }
    }
  );
});

module.exports = router;
