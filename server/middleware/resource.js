module.exports = options => {
  return (req, res, next) => {
    // 将单词转化
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}