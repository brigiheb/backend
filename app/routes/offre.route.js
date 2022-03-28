const express = require("express")
const router = express.Router()


const offres = require("../controllers/offre.controller")

router.post("/offrePost",offres.createOffre)
router.get("/offreGetAll",offres.findAll)
router.get("/offreGet/:id",offres.findOneOffre)
router.put("/offreUp/:id",offres.updateOffre)
router.delete("/offreDel/:id",offres.deleteOffre)







module.exports = router;