const db =require("../models");
const data = require("../config/db.config");
const Offre = db.offres 
const Op = db.Sequelize.Op


//post hedhi
exports.createOffre = async(req, res)=>{
    const offre = {
        titre : req.body.titre,
        typeTravail : req.body.typeTravail,
        description : req.body.description,
        titre : req.body.titre,
        salaireMin : req.body.salaireMin,
        salaireMax : req.body.salaireMax,
        dateDebut : req.body.dateDebut,
        dateFin : req.body.dateFin,




        
    }
   
    Offre.create(offre)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the offre."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const titre = req.query.titre;
    var condition = titre ? {titre: {[Op.like]: `%${titre}%`}}:null;
    Offre.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving offres."
        })
    })
}
// Find a single Demande with id 
exports.findOneOffre = (req, res)=>{
    const id = req.params.id;

    Offre.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Offre with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Offre with id=" + id
          });
    })
};

//hedhi apdate
exports.updateOffre = (req, res)=>{
    const id = req.params.id;

    Offre.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Offre was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Offre with id=${id}. Maybe Offre was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Offre with id=" + id
        })
    })
}

  // Delete a Offre with the specified id in the request
  exports.deleteOffre = (req, res)=>{
    const id = req.params.id;
    Offre.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Offre was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Offre with id=${id}. Maybe Offre was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Offre with id=" + id
                })
            })
        }
    })
  }
