const express = require('express');
const router = express.Router();
const connect = require('../db/mysql');
router.post('/register', (req, res) => {
  console.log(req.body);
  connect.query(
    'INSERT INTO users (username, password) VALUES (?,?);',
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: 500, msg: '账号已经存在' });
      } else {
        res.send({ code: 200, msg: '注册成功' });
      }
    }
  );
});

module.exports = router;
