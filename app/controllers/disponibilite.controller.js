const db =require("../models");
const data = require("../config/db.config");
const Disponibilite = db.disponibilites
const Op = db.Sequelize.Op


//post hedhi
exports.createDispo = async(req, res)=>{
    const disponibilite = {
        typeDispo : req.body.typeDispo,
        
    }
   
    Disponibilite.create(disponibilite)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the disponibilite."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const typeDispo = req.query.typeDispo;
    var condition = typeDispo ? {typeDispo: {[Op.like]: `%${typeDispo}%`}}:null;
    Disponibilite.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving disponibilites."
        })
    })
}
// Find a single Demande with id 
exports.findOneDispo= (req, res)=>{
    const id = req.params.id;

    Disponibilite.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Disponibilite with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Disponibilite with id=" + id
          });
    })
};

//hedhi apdate
exports.updateDispo = (req, res)=>{
    const id = req.params.id;

    Disponibilite.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Disponibilite was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Disponibilite with id=${id}. Maybe Disponibilite was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Disponibilite with id=" + id
        })
    })
}

  // Delete a Disponibilite with the specified id in the request
  exports.deleteDispo = (req, res)=>{
    const id = req.params.id;
    Disponibilite.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Disponibilite was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Disponibilite with id=${id}. Maybe Disponibilite was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Disponibilite with id=" + id
                })
            })
        }
    })
  }
