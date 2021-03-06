module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define("Author", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 60],
            },
        },
    },
    {
        paranoid: true,
        timestamps: true,
    }
    );

    Author.associate = models => {
        Author.hasMany(models.Book);
    };

    return Author;
}