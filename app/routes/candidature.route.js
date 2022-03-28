const express = require("express")
const router = express.Router()


const candidatures = require("../controllers/candidature.controller")

router.post("/candidaturePost",candidatures.createCandidature)
router.get("/candidatureGetAll",candidatures.findAll)
router.get("/candidatureGet/:id",candidatures.findOneCandidature)
router.put("/candidatureUp/:id",candidatures.updateCandidature)
router.delete("/candidatureDel/:id",candidatures.deleteCandidature)







module.exports = router;