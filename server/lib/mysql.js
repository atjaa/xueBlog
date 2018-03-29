var mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit: 10,
  host: '192.168.0.2',
  user: 'root',
  password: 'pl!112233',
  database: 'blog'
})
class Article {
  create (data, callback) {
    var sql = 'insert into article(`classify`,`title`,`content`,`contenttomark`,`created_at`) ' +
      'values(\'' + data.classify + '\',\'' + data.title + '\',\'' + data.content + '\',\'' + data.contentToMark + '\',now())'
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  find (page, limit, callback) {
    var sql = 'select id as _id,`classify`,`title`,`content`,`contenttomark` as contentToMark,`created_at` from article limit ' + page + ',' + limit
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  count (callback) {
    var sql = 'select count(*) from article'
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  findOne (postId, callback) {
    var sql = 'select id as _id,`classify`,`title`,`content`,`contenttomark` as contentToMark,`created_at` from article where id = \'' + postId + '\''
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result && result.length > 0) {
            callback(result[0])
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  findByClassify (classify, callback) {
    var sql = 'select id as _id,`classify`,`title`,`content`,`contenttomark` as contentToMark,`created_at`from article where classify = \'' + classify + '\''
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  remove (postId, callback) {
    var sql = 'delete from article where id = \'' + postId + '\''
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  update (postId, data, callback) {
    var sql = 'update article set `classify` = \'' + data.classify + '\',' +
      '`title` = \'' + data.title + '\',' +
      '`content` = \'' + data.content + '\',' +
      '`contenttomark` = \'' + data.contentToMark + '\' where id = ' + postId
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
}
class Classify {
  create (data, callback) {
    var sql = 'insert into classify(`classify`,`created_at`) values(\'' + data.classify + '\',now())'
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  remove (classid, callback) {
    var sql = 'delete from classify where _id =\'' + classid + '\''
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  update (classid, data, callback) {
    var sql = 'update classify set `classify` = \'' + data.classify + '\' where _id =\'' + classid + '\''
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  find (callback) {
    var sql = 'select * from classify'
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
}
class User {
  findOne (name, callback) {
    var sql = 'select * from user where name =\'' + name + '\''
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result && result.length > 0) {
            callback(result[0])
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
  create (user, callback) {
    var sql = 'insert into user(name,password) values(\'' + user.name + '\',\'' + user.password + '\')'
    pool.getConnection(function (err, conn) {
      if (err) {
        callback()
      } else {
        conn.query(sql, function (qerr, result) {
          if (result) {
            callback(result)
          } else {
            callback()
          }
          conn.release()
        })
      }
    })
  }
}
module.exports.User = new User()
module.exports.Classify = new Classify()
module.exports.Article = new Article()
