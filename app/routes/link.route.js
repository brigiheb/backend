const express = require("express")
const router = express.Router()


const links = require("../controllers/link.controller")

router.post("/linkPost",links.createLink)
router.get("/linkGetAll",links.findAll)
router.get("/linkGet/:id",links.findOneLink)
router.put("/linkUp/:id",links.updateLink)
router.delete("/linkDel/:id",links.deleteLink)







module.exports = router;