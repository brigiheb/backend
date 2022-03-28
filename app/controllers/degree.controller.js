const db =require("../models");
const data = require("../config/db.config");
const Degree = db.degrees 
const Op = db.Sequelize.Op


//post hedhi
exports.createDegree = async(req, res)=>{
    const degree = {
        nomDiplome : req.body.nomDiplome,
        niveau : req.body.niveau,
        
    }
   
    Degree.create(degree)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the degree."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const nomDiplome = req.query.nomDiplome;
    var condition = nomDiplome ? {nomDiplome: {[Op.like]: `%${nomDiplome}%`}}:null;
    Degree.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving degrees."
        })
    })
}
// Find a single Demande with id 
exports.findOneDegree = (req, res)=>{
    const id = req.params.id;

    Degree.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Degree with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Degree with id=" + id
          });
    })
};

//hedhi apdate
exports.updateDegree = (req, res)=>{
    const id = req.params.id;

    Degree.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Degree was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Degree with id=${id}. Maybe Degree was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Degree with id=" + id
        })
    })
}

  // Delete a Degree with the specified id in the request
  exports.deleteDegree = (req, res)=>{
    const id = req.params.id;
    Degree.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Degree was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Degree with id=${id}. Maybe Degree was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Degree with id=" + id
                })
            })
        }
    })
  }
