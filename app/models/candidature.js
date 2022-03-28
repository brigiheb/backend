const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Candidature = sequelize.define("candidature",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        prénom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true  
        },
        dateNaissance:{
            type: DataTypes.DATE,
            allowNull: false
        },
        telNum:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true  
        },
        
    })

    return Candidature;
};