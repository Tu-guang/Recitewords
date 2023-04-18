const express = require('express');
const router = express.Router();
const connect = require('../db/mysql');
router.post('/UpdateUserInfo', (req, res) => {
  console.log(req.body);
  let sql;
  if (req.body.password !== '') {
    sql = `UPDATE users SET username='${req.body.name}',password='${req.body.password}',sign_day='${req.body.sign_day}',word_num='${req.body.word_num}',badge_num='${req.body.badge_num}',class_num='${req.body.class_num}',order_num='${req.body.order_num}',url='${req.body.url}' WHERE username = '${req.body.oldname}'`;
  } else {
    sql = `UPDATE users SET username='${req.body.name}',sign_day='${req.body.sign_day}',word_num='${req.body.word_num}',badge_num='${req.body.badge_num}',class_num='${req.body.class_num}',order_num='${req.body.order_num}',url='${req.body.url}' WHERE username = '${req.body.oldname}'`;
  }
  console.log(sql);
  connect.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: 500, msg: '错误' });
    } else {
      res.send({ code: 200, msg: '修改成功' });
    }
  });
});

module.exports = router;
