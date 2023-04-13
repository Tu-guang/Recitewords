const express = require('express')
const app = express()
const bodyparser = require('body-parser')

//extended:false 表示使用系统模块querystring来处理 将字符串转化为对象
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
)
app.use(bodyparser.json())
//挂载内置中间件处理静态文件
app.use(express.static('public'))
// express框架解决跨域问题的代码，注意该代码要放在 app.use(router); 之前
//设置跨域请求
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization,Token,Accept, X-Requested-With , yourHeaderFeild'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/', function(req, res) {
  res.send('Hello World')
})
//登录
app.use('/api', login)
let server = app.listen(8081, function() {
  let port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:%s', port)
})
