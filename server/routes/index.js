const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/categories", require("./categories.routes"));
router.use("/booking", require("./booking.routes"));
router.use("/comments", require("./comment.routes"));
router.use("/user", require("./user.routes"));
router.use("/masters", require("./masters.routes"));
router.use("/services", require("./services.routes"));

module.exports = router;
