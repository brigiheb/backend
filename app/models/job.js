const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Job = sequelize.define("job",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        categorieDemploi:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
       
    })

    return Job;
};