const express = require('express');
const router = express.Router();
const connect = require('../db/mysql');
router.post('/findArticle', (req, res) => {
  console.log(req.body);
  if (req.body.title !== '') {
    connect.query(
      "SELECT * FROM article WHERE title LIKE '%" + req.body.title + "%'",
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({ err: 500, msg: '错误' });
        } else {
          res.send({ code: 200, msg: '成功', data: result });
        }
      }
    );
  } else {
    res.send({ err: 500, msg: '请输入搜索内容' });
  }
});

module.exports = router;
