const db = require('../database/models');
const sequelize = db.sequelize;

const { Op } = require('sequelize');
const Movie = db.Movie;
const Genre = db.Genre;
const Actor = db.Actor;

const actorsController = {
	list: (req, res) => {
		db.Actor.findAll({ include: [{ association: 'favorite_movie' }] }).then((actors) => {
			res.render('actorsList.ejs', { actors });
		});
	},
	detail: (req, res) => {
		db.Actor.findByPk(req.params.id, { include: [{ association: 'favorite_movie' }] }).then((actor) => {
			res.render('actorsDetail.ejs', { actor });
		});
	},
	topActors: (req, res) => {
		db.Actor.findAll({
			order: [['rating', 'DESC']],
			limit: 10,
		}).then((actors) => {
			res.render('topActors', { actors });
		});
	},
	worstActors: (req, res) => {
		db.Actor.findAll({
			order: [['rating', 'ASC']],
			limit: 10,
		}).then((actors) => {
			res.render('worstActors', { actors });
		});
	},
	add: (req, res) => {
		db.Movie.findAll().then((movies) => {
			res.render('actorsAdd.ejs', { allMovies: movies });
		});
	},
	create: (req, res) => {
		db.Actor.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			rating: req.body.rating,
			favorite_movie_id: req.body.favorite_movie_id,
		});
		res.redirect('/actors');
	},
	edit: (req, res) => {
		let actorFind = db.Actor.findByPk(req.params.id, { include: [{ association: 'favorite_movie' }] });
		let movies = db.Movie.findAll();
		Promise.all([actorFind, movies]).then(([actorFind, movies]) => {
			res.render('actorsEdit', { actor: actorFind, allMovies: movies });
		});
	},
	update: (req, res) => {
		db.Actor.update(
			{
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				rating: req.body.rating,
				favorite_movie_id: req.body.favorite_movie_id,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);
		res.redirect(`../detail/${req.params.id}`);
	},
};

module.exports = actorsController;
