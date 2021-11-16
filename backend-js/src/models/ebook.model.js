module.exports = (sequelize, DataTypes) => {
	const Ebook = sequelize.define(
		'Ebook',
		{
			ebook_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			ebook_name: {
				type: DataTypes.STRING(250),
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true,
				},
			},
			ebook_link: {
				type: DataTypes.TEXT,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true,
				},
			},
		},
		{
			sequelize,
			modelName: 'Ebook',
			timestamps: false,
		}
	);

	Ebook.associate = function (models) {};

	return Ebook;
};
