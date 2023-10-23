const express = require("express");
const Services = require("../models/Services");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const { serviceId } = req.query;
    const list = await Services.find(serviceId);
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.post("/", auth, async (req, res) => {
  try {
    const newServices = await Services.create({
      ...req.body,
    });
    res.status(201).send(newServices);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.delete("/:serviceId", auth, async (req, res) => {
  try {
    const { serviceId } = req.params;
    const removedService = await Services.findById(serviceId);
    const currentUser = removedService.userId.toString() === req.user._id;
    const isAdmin = req.userRole === "admin";

    if (currentUser || isAdmin) {
      await removedService.deleteOne();
      return res.send(null);
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
