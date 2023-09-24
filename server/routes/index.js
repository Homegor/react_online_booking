const express = require("express")
const router = express.Router({ mergeParams: true })

router.use("/auth", require("./auth.routes"))
router.use("/services", require("./services.routes"))
router.use("/categories", require("./categories.routes"))
router.use("/comments", require("./comment.routes"))

module.exports = router
