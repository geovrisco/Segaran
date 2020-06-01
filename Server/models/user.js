'use strict';
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcrypt')
  const saltRound = 10
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class User extends Model{}

  User.init({
    name: {
      type: DataTypes.STRING,
    },
    fullname: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          msg:'nama lengkap tidak boleh kosong'
        },
        notNull: {
          msg:'nama lengkap harus diisi'
        }
      }
    },
    dob: {
      type: DataTypes.DATE,
    },
    address: {
      type:  DataTypes.STRING,
    },
    phone1: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'No Hp tidak boleh kosong',
        },
        notNull: {
          msg: 'No Hp lengkap harus diisi'
        }
      }
    },
    phone2: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn:{
          args:[['pria','wanita']],
          msg:'gender tidak valid'
        }
      }
    },
    email:{
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Email tidak boleh kosong',
        },
        notNull: {
          msg: 'Email lengkap harus diisi'
        },
        isEmail: {
          msg: 'Pastikan penulisan email benar'
        }
      }
    },
    password: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password tidak boleh kosong',
        },
        notNull: {
          msg: 'Password lengkap harus diisi'
        },
        min:{
          args:[5],
          msg:'password minimal 5 huruf/angka'
        }
      }
    },
    role: DataTypes.STRING

  },{sequelize, hooks: {
    beforeCreate(instance, options){
      return bcrypt.hash(instance.password, saltRound)
      .then(hash=> {
        instance.password=hash
      })
    }
  }})

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};