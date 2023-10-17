const express = require("express");
const Masters = require("../models/Masters");
const auth = require("../middleware/auth.middleware");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Masters.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.patch("/:mastersId", auth, async (req, res) => {
  try {
    const { mastersId } = req.params;
    console.log(mastersId);

    if (mastersId === req.user._id) {
      const updateMastersId = await Masters.findByIdAndUpdate(
        mastersId,
        req.body,
        {
          new: true,
        }
      );
      res.send(updateMastersId);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;
