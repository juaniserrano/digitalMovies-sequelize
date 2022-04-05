//const genreModel = require('./models/genresRoutes');

// const { Model } = require('sequelize/types');

module.exports = (sequelize, dataTypes) => {
	let alias = 'Movie'; // esto debería estar en singular
	let cols = {
		id: {
			type: dataTypes.BIGINT(10).UNSIGNED,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		// created_at: dataTypes.TIMESTAMP,
		// updated_at: dataTypes.TIMESTAMP,
		title: {
			type: dataTypes.STRING(500),
			allowNull: false,
		},
		rating: {
			type: dataTypes.DECIMAL(3, 1).UNSIGNED,
			allowNull: false,
		},
		awards: {
			type: dataTypes.BIGINT(10).UNSIGNED,
			allowNull: false,
		},
		release_date: {
			type: dataTypes.DATEONLY,
			allowNull: false,
		},
		length: dataTypes.BIGINT(10),
		genre_id: dataTypes.BIGINT(10),
	};
	let config = {
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: false,
	};
	const Movie = sequelize.define(alias, cols, config);

	//Hacer associations despues de definir el modelo
	//Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
	Movie.associate = function (models) {
		Movie.belongsTo(models.Genre, {
			as: 'genres',
			foreignKey: 'genre_id',
		}),
			Movie.hasMany(models.Actor, {
				as: 'actors',
				foreignKey: 'favorite_movie_id',
			});
	};

	return Movie;
};
