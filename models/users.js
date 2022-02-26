'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    UserId: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};

module.exports.people = [
  {
    id: 3412,
    name: 'Sarah Taylor',
    username: 'sarah.taylor3',
    age: 54
  },
  {
    id: 5329,
    name: 'Clara Tabby',
    username: 'clara.tabby44',
    age: 28
  },
  {
    id: 9384,
    name: 'Trent Anderson',
    username: 'anderson_trent93',
    age: 31
  },
  {
    id: 2930,
    name: 'Jeremy Hudson',
    username: 'jerbear22',
    age: 44
  },
  {
    id: 5723,
    name: 'David Marling',
    username: 'dave.mar.ling',
    age: 23
  }
];