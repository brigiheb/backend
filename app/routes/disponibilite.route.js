const express = require("express")
const router = express.Router()


const disponibilites = require("../controllers/disponibilite.controller")

router.post("/dispoPost",disponibilites.createDispo)
router.get("/dispoGetAll",disponibilites.findAll)
router.get("/dispoGet/:id",disponibilites.findOneDispo)
router.put("/dispoUp/:id",disponibilites.updateDispo)
router.delete("/dispoDel/:id",disponibilites.deleteDispo)







module.exports = router;