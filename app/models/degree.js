const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Degree = sequelize.define("degree",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        nomDiplome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        niveau:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
    })

    return Degree;
};