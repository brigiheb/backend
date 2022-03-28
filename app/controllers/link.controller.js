const db =require("../models");
const data = require("../config/db.config");
const Link = db.links 
const Op = db.Sequelize.Op


//post hedhi
exports.createLink = async(req, res)=>{
    const link = {
        type : req.body.type,
        link : req.body.link,
        uploadDate : req.body.uploadDate,
        evaluation : req.body.evaluation,

        
    }
   
    Link.create(link)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the link."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const link = req.query.link;
    var condition = link ? {link: {[Op.like]: `%${link}%`}}:null;
    Link.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving links."
        })
    })
}
// Find a single Demande with id 
exports.findOneLink = (req, res)=>{
    const id = req.params.id;

    Link.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Link with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Link with id=" + id
          });
    })
};

//hedhi apdate
exports.updateLink = (req, res)=>{
    const id = req.params.id;

    Link.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Link was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Link with id=${id}. Maybe Link was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Link with id=" + id
        })
    })
}

  // Delete a Link with the specified id in the request
  exports.deleteLink = (req, res)=>{
    const id = req.params.id;
    Link.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Link was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Link with id=${id}. Maybe Link was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Link with id=" + id
                })
            })
        }
    })
  }
