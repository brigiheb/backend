const db =require("../models");
const data = require("../config/db.config");
const Experience = db.experiences 
const Op = db.Sequelize.Op


//post hedhi
exports.createExperience = async(req, res)=>{
    const experience = {
        nmbrExperience : req.body.nmbrExperience,
        
    }
   
    Experience.create(experience)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the experience."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const nmbrExperience = req.query.nmbrExperience;
    var condition = nmbrExperience ? {nmbrExperience: {[Op.like]: `%${nmbrExperience}%`}}:null;
    Experience.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving experiences."
        })
    })
}
// Find a single Demande with id 
exports.findOneExperience = (req, res)=>{
    const id = req.params.id;

    Experience.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Experience with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Experience with id=" + id
          });
    })
};

//hedhi apdate
exports.updateExperience = (req, res)=>{
    const id = req.params.id;

    Experience.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Experience was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Experience with id=${id}. Maybe Experience was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Experience with id=" + id
        })
    })
}

  // Delete a Experience with the specified id in the request
  exports.deleteExperience = (req, res)=>{
    const id = req.params.id;
    Experience.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Experience was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Experience with id=${id}. Maybe Experience was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Experience with id=" + id
                })
            })
        }
    })
  }
