const db = require('../database/models');
const sequelize = db.sequelize;

const genresController = {
	// list2: (req, res) => {
	// 	db.Genre.findAll().then((genres) => {
	// 		res.send(genres);
	// 		res.render('genresList.ejs', { genres });
	// 	});
	// },
	list: (req, res) => {
		db.Genre.findAll({ include: [{ association: 'movies' }] }).then((genres) => {
			console.log(genres);
			res.send(genres);
			res.render('genresList.ejs', { genres });
		});
	},
	detail: (req, res) => {
		db.Genre.findByPk(req.params.id).then((genre) => {
			res.render('genresDetail.ejs', { genre });
		});
	},
};

module.exports = genresController;
