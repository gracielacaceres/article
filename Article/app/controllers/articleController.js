const pool = require('../config/db');


exports.getAllArticles = (req, res) => {
  pool.query('SELECT * FROM article', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los artículos');
      return;
    }
    res.json(result.recordset);
  });
};


exports.createArticle = (req, res) => {
  const { photo, title, content, create_date, published_date, status, category_id, user_id } = req.body;
};

exports.updateArticle = (req, res) => {
  const { id } = req.params;
  const { photo, title, content, create_date, published_date, status, category_id, user_id } = req.body;

};

exports.deleteArticle = (req, res) => {
  const { id } = req.params;

};
