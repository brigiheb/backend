const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const { Model, BelongsTo } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});



sequelize.authenticate()
.then(() => {
    console.log('connected..')
})

.catch(err => {
    console.log('Error'+ err)
})
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

db.degrees=require("./degree.js")(sequelize,Sequelize)
db.experiences=require("./experience")(sequelize,Sequelize)
db.jobs=require("./job")(sequelize,Sequelize)
db.disponibilites=require("./disponibilite")(sequelize,Sequelize)
db.links=require("./link")(sequelize,Sequelize)
db.candidatures=require("./candidature")(sequelize,Sequelize)
db.offres=require("./offre")(sequelize,Sequelize)


//****Many to Many******** */

// candidature & offres
db.candidatures.belongsToMany(db.offres,{
  through : 'candidature_offre',
  as:'offre',
  foreignKey:'candidatureId',

})
db.offres.belongsToMany(db.candidatures,{
  through : 'candidature_offre',
  as:'candidature',
  foreignKey:'offreId'

})

//ONE to MANY
//offre & degree

db.degrees.hasMany(db.offres,{
  foreignKey : 'degreeId',
  as: 'offre'
})

db.offres.belongsTo(db.degrees,{
  foreignKey : 'degreeId',
  as: 'degree'

})

// offre experience

db.experiences.hasMany(db.offres,{
  foreignKey : 'experienceId',
  as: 'offre'
})

db.offres.belongsTo(db.experiences,{
  foreignKey : 'experienceId',
  as: 'experience'

})

// offre  disponibilite

db.disponibilites.hasMany(db.offres,{
  foreignKey : 'disponibiliteId',
  as: 'offre'
})

db.offres.belongsTo(db.disponibilites,{
  foreignKey : 'disponibiliteId',
  as: 'disponibilite'

})

//offre job

db.jobs.hasMany(db.offres,{
  foreignKey : 'jobId',
  as: 'offre'
})

db.offres.belongsTo(db.jobs,{
  foreignKey : 'jobId',
  as: 'job'

})



module.exports = db ;