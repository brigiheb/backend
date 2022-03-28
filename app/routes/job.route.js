const express = require("express")
const router = express.Router()


const jobs = require("../controllers/job.controller")

router.post("/jobPost",jobs.createJob)
router.get("/jobGetAll",jobs.findAll)
router.get("/jobGet/:id",jobs.findOneJob)
router.put("/jobUp/:id",jobs.updateJob)
router.delete("/jobDel/:id",jobs.deleteJob)







module.exports = router;