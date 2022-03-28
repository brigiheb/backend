const {DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize)=>{
    const Experience = sequelize.define("experience",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false
          },
        nmbrExperience:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
       
       
    })

    return Experience;
};