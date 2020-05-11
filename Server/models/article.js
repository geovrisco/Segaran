'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Article extends Model{}

  Article.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg:'Judul tidak boleh kosong'
        },
        notNull: {
          msg:'Judul harus diisi'
        }
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg:'text tidak boleh kosong'
        },
        notNull: {
          msg:'text harus diisi'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg:'kategori tidak boleh kosong'
        },
        notNull: {
          msg:'kategori harus diisi'
        },
      }
    },
    picture: DataTypes.STRING,
    media: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg:'tanggal tidak boleh kosong'
        },
        notNull: {
          msg:'tanggal harus diisi'
        },
        isDate:{
          msg:'input tanggal salah'
        }
      }
    }
  },{sequelize})


  // const Article = sequelize.define('Article', {
  // }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};