module.exports = (sequelize, DataTypes) => {
	const Image = sequelize.define(
		'Image',
		{
			image_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			image_link: {
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
			modelName: 'Image',
		}
	);

	Image.associate = function (models) {
		Image.belongsTo(Product);
	};

	return Image;
};
