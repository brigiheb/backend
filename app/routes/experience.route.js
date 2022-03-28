const express = require("express")
const router = express.Router()


const experiences = require("../controllers/experience.controller")

router.post("/experiencePost",experiences.createExperience)
router.get("/experienceGetAll",experiences.findAll)
router.get("/experienceGet/:id",experiences.findOneExperience)
router.put("/experienceUp/:id",experiences.updateExperience)
router.delete("/experienceDel/:id",experiences.deleteExperience)







module.exports = router;