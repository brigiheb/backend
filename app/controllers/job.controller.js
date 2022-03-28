const db =require("../models");
const data = require("../config/db.config");
const Job = db.jobs 
const Op = db.Sequelize.Op


//post hedhi
exports.createJob = async(req, res)=>{
    const job = {
        categorieDemploi : req.body.categorieDemploi,
        
    }
   
    Job.create(job)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the job."
        })
    })
}
//hedhi find all
exports.findAll = async(req, res)=>{
    const categorieDemploi = req.query.categorieDemploi;
    var condition = categorieDemploi ? {categorieDemploi: {[Op.like]: `%${categorieDemploi}%`}}:null;
    Job.findAll({where:condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving jobs."
        })
    })
}
// Find a single Demande with id 
exports.findOneJob = (req, res)=>{
    const id = req.params.id;

    Job.findByPk(id)
    .then(data =>{
        if (data){
            res.send(data);
        }else {
            res.status(400).send({
                message : `Cannot find Job with id=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Job with id=" + id
          });
    })
};

//hedhi apdate
exports.updateJob = (req, res)=>{
    const id = req.params.id;

    Job.update(req.body,{
        where: {id: id}
    })
    .then(num=>{
        if (num ==1){
            res.send({
                message: "Job was updated successfully."  
            })
        }else {
            res.send({
                message: `Cannot update Job with id=${id}. Maybe Job was not found or req.body is empty!`
            })
        } 
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating Job with id=" + id
        })
    })
}

  // Delete a Job with the specified id in the request
  exports.deleteJob = (req, res)=>{
    const id = req.params.id;
    Job.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1){
            res.send({
                message : "Job was deleted successfully"
            })
        } else {
            res.send({
                message: ` Cannot delete Job with id=${id}. Maybe Job was not found!`
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete Job with id=" + id
                })
            })
        }
    })
  }
