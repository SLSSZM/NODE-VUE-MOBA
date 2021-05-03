const jwt = require('jsonwebtoken')
const AdminUser = require('../models/AdminUser')
const assert = require('http-assert')
module.exports = options => {
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, 'jwt请先登录')
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, 'id请先登录')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, 'uer请先登录')
    next()
  }
}