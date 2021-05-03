module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  // 抛出错误
  const assert = require('http-assert')
  // 登录验证中间件
  const authMiddleware = require('../../middleware/auth')
  // 同用接口中间件
  const resourceMiddleware = require('../../middleware/resource')

  // 创建资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 资源列表
  router.get('/', async (req, res) => {
    let queryOption = {}
    if (req.Model.modelName === 'Category') {
      queryOption.populate = 'parent'
    }
    const list = await req.Model.find().setOptions(queryOption)
    res.send(list)
  })
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  // 更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源 
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })
  // 通用接口
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 图片上传api
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), (req, res) => {
    const file = req.file
    file.url = 'http://localhost:3000/uploads/' + file.filename
    res.send(file)
  })

  // 登录api
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    const isValid = bcrypt.compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // 返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.status || 500).send({
      message: err.message
    })
  })
}