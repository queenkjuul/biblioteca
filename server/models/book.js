const { DataTypes } = require("sequelize")

module.exports = (sequelize, datatypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100],
            },
        },
        synopsis: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [0, 5000],
            },
        },
        pageCount: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
                min: 0,
                max: 2000,
            },
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
                min: 1,
                max: 5,
            },
        },
        publishDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        coverimg: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 2000],
            },
        },
    },
    {
        paranoid: true,
        timestamps: true,
    });

    Book.associate = models => {
        Book.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false,
            },
        });
    }

    return Book;
}