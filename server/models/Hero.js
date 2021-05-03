const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  banner: { type: String },
  // 称号
  title: { type: String },
  // 职业
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attach: { type: Number },
    survive: { type: Number }
  },
  // 技能描述
  skills: [{
    icon: { type: String },
    name: { type: String },
    delay: { type: String },
    cost: { type: String },
    description: { type: String },
    tips: { type: String }
  }],
  // 顺风局推荐出装
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 逆风局推荐出装
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 使用技巧
  usageTips: { type: String },
  // 对抗技巧
  battleTips: { type: String },
  // 团战思路
  teamTips: { type: String },
  // 推荐搭档
  partners: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String }
  }]
})

module.exports = mongoose.model('Hero', schema, 'heroes')