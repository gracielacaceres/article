const pool = require('../../config/db');

// Modelo para los artículos

class Article {
  constructor(photo, title, content, create_date, published_date, status, category_id, user_id) {
    this.photo = photo;
    this.title = title;
    this.content = content;
    this.create_date = create_date;
    this.published_date = published_date;
    this.status = status;
    this.category_id = category_id;
    this.user_id = user_id;
  }

  static getAll(callback) {
    pool.query('SELECT * FROM article', (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result.recordset);
    });
  }

  save(callback) {
    pool.query(`INSERT INTO article (photo, title, content, create_date, published_date, status, category_id, user_id) VALUES (@photo, @title, @content, @create_date, @published_date, @status, @category_id, @user_id)`, (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  }

  static updateById(id, data, callback) {
    pool.query(`UPDATE article SET photo = @photo, title = @title, content = @content, create_date = @create_date, published_date = @published_date, status = @status, category_id = @category_id, user_id = @user_id WHERE id_article = @id`, (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  }

  static deleteById(id, callback) {
    pool.query(`DELETE FROM article WHERE id_article = @id`, (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  }
}

module.exports = Article;
