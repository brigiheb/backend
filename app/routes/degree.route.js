const express = require("express")
const router = express.Router()


const degrees = require("../controllers/degree.controller")

router.post("/degreePost",degrees.createDegree)
router.get("/degreeGetAll",degrees.findAll)
router.get("/degreeGet/:id",degrees.findOneDegree)
router.put("/degreeUp/:id",degrees.updateDegree)
router.delete("/degreeDel/:id",degrees.deleteDegree)







module.exports = router;