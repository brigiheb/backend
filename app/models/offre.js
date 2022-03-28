const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Offre = sequelize.define("Offre",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        titre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        typeTravail:{
            type: DataTypes.STRING,
            allowNull: false
        },

        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        salaireMin:{
            type: DataTypes.INTEGER,
            allowNull: false,
             
        },
        salaireMax:{
            type: DataTypes.INTEGER,
            allowNull: false,
             
        },
        
        dateDebut:{
            type: DataTypes.DATE,
            allowNull: false,
             
        },
        dateFin:{
            type: DataTypes.DATE,
            allowNull: false,
             
        },
       
        
    })

    return Offre;
};