const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Link = sequelize.define("link",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        type:{
            type: DataTypes.STRING,
            allowNull: false
        },
        link:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        evaluation:{
            type: DataTypes.INTEGER,
            allowNull: false,
             
        },
       
        
    })

    return Link;
};