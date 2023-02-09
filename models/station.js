'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trip}) {
      // define association here
      this.hasMany(Trip,{foreignKey:"fromStation",as:"from"});
      this.hasMany(Trip,{foreignKey:"toStation",as:"to"});
    }
  }
  Station.init({
    name:{
      type: DataTypes.STRING,
      allowNull:false,
      // check validation sequelize
      validate:{
        notEmpty:true
      }
    },
    address: {
      type:DataTypes.STRING,
      validate:{
        checkLength(value){
          if(value.length>=5){
            return true;
          }else{
            throw Error("Dia chi it nhat 5 ki tu");
          }
        }
      }
    },
    province: {
      type:DataTypes.STRING,
      validate:{
        isIn:["HCM,DN,LD,HP,CT,HN"],
      }
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};