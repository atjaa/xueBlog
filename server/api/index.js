var User = require('../lib/mysql').User
var Classify = require('../lib/mysql').Classify
var Article = require('../lib/mysql').Article
module.exports = {
  create: function (user, callback) {
    User.create(user, function (res) {
      callback(res)
    })
  },
  getUserByName: function (name, callback) {
    User.findOne(name, function (res) {
      callback(res)
    })
  },
  //  创建分类
  createClass: function (data, callback) {
    Classify.create(data, function (res) {
      callback(res)
    })
  },
  // 删除分类
  removeClass: function (classId, callback) {
    Classify.remove(classId, function (res) {
      callback(res)
    })
  },
  // 编辑分类
  updateClass: function (classId, data, callback) {
    Classify.update(classId, data, function (res) {
      callback(res)
    })
  },
  // 查询所有分类
  findAllClass: function (callback) {
    Classify.find(function (res) {
      callback(res)
    })
  },
  // 创建文章
  createArticle: function (params, callback) {
    Article.create(params, function (res) {
      callback(res)
    })
  },
  // 获取所有文章
  getAllArticles: function (page, limit, callback) {
    if (page && limit) {
      if (page > 0) {
        page = page - 1
      }
      Article.find(page, limit, function (res) {
        callback(res)
      })
    }
  },
  // 获取所有文章
  getArticlesCount: function (callback) {
    Article.count(function (res) {
      callback(res)
    })
  },
  // 根据classify获取所有文章
  getArticlesByClassify: function (classify, callback) {
    Article.findByClassify(classify, function (res) {
      callback(res)
    })
  },
  getOneArticle (postId, callback) {
    Article.findOne(postId, function (res) {
      callback(res)
    })
  },
  // 删除一篇文章
  removeOneArticle: function (postId, callback) {
    Article.remove(postId, function (res) {
      callback(res)
    })
  },
  // 编辑一篇文章
  updateArticle: function (postId, data, callback) {
    Article.update(postId, data, function (res) {
      callback(res)
    })
  }
}
