module.exports = (sequelize, DataTypes) => {
	const Rating = sequelize.define(
		'Rating',
		{
			rating_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			comment: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			rating_number: {
				type: DataTypes.INTEGER,
				defaultValue: 5,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Rating',
		}
	);

	Rating.associate = function (models) {
		Rating.hasOne(User);
		Rating.hasOne(Product);
	};

	return Rating;
};
