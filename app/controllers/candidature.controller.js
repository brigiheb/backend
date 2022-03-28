const db =require("../models");
const data = require("../config/db.config");
const Candidature = db.candidatures 
const Op = db.Sequelize.Op


//post hedhi
exports.createCandidature = async(req, res)=>{
    const candidature = {
        nom : req.body.nom,
        prénom : req.body.prénom,
        email : req.body.email,
        dateNaissance : req.body.dateNaissance,
        telNum : req.body.telNum,


        
    }
   
    Candidature.create(candidature)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the candidture."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const nom = req.query.nom;
    var condition = nom ? {nom: {[Op.like]: `%${nom}%`}}:null;
    Candidature.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving candidatures."
        })
    })
}
// Find a single Demande with id 
exports.findOneCandidature = (req, res)=>{
    const id = req.params.id;

    Candidature.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Candidature with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Candidature with id=" + id
          });
    })
};

//hedhi apdate
exports.updateCandidature = (req, res)=>{
    const id = req.params.id;

    Candidature.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Candidature was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Candidature with id=${id}. Maybe Candidature was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Candidature with id=" + id
        })
    })
}

  // Delete a Candidature with the specified id in the request
  exports.deleteCandidature = (req, res)=>{
    const id = req.params.id;
    Candidature.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Candidature was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Candidature with id=${id}. Maybe Candidature was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Candidature with id=" + id
                })
            })
        }
    })
  }
