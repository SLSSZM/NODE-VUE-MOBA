const express = require('express')

const app = express();

// 跨域
app.use(require('cors')())
// 中间件
app.use(express.json())

app.use('/', express.static(__dirname + '/public/web'))
app.use('/home', express.static(__dirname + '/public/web'))
app.use('/admin', express.static(__dirname + '/public/admin'))
app.use('/admin/login', express.static(__dirname + '/public/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.set('secret', 'dfhasdhfisf143r42789670fd')

// 数据库
require('./plugins/db.js')(app)

// 路由
require('./routes/admin/index.js')(app)
require('./routes/web/index.js')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})