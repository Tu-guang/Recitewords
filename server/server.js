const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const multer = require('multer');
const login = require('./router/login');
const register = require('./router/register');
const uploads = require('./router/upload');
const userInfo = require('./router/userInfo');
const getArticle = require('./router/article');
const findArticle = require('./router/findarticle');
const getVideo = require('./router/video');
const findVideo = require('./router/findvideo');
const updateUserInfo = require('./router/updateUserInfo');
//extended:false 表示使用系统模块querystring来处理 将字符串转化为对象
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());
//挂载内置中间件处理静态文件
app.use(express.static('pubilcs'));

var filestorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./pubilcs/image`);
  },
  filename: (req, file, cb) => {
    // cb(null, "[maues]-" + file.originalname);
    cb(null, file.originalname);
  },
  fileFilter(req, file, cb) {
    // 解决中文名乱码的问题
    file.originalname = Buffer.from(req.file.originalname, 'latin1').toString(
      'utf8'
    );
  },
});

var upload = multer({
  storage: filestorageEngine,
});

// express框架解决跨域问题的代码，注意该代码要放在 app.use(router); 之前
//设置跨域请求
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization,Token,Accept, X-Requested-With , yourHeaderFeild'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World');
});
//登录
app.use('/api', login);
app.use('/api', register);
app.use('/api', userInfo);
app.use('/api', getArticle);
app.use('/api', findArticle);
app.use('/api', getVideo);
app.use('/api', findVideo);
app.use('/api', updateUserInfo);
//上传图片
app.use('/api', upload.single('file'), uploads);
let server = app.listen(8081, function() {
  let port = server.address().port;
  console.log('应用实例，访问地址为 http://localhost:%s', port);
});
