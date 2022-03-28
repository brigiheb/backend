const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Disponibilite = sequelize.define("disponibilite",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        typeDispo:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
       
    })

    return Disponibilite;
};