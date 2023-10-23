const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");
const Booking = require("../models/Booking");

router.get("/", async (req, res) => {
  try {
    const { bookingId } = req.query;
    const list = await Booking.find(bookingId);
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const newBooking = await Booking.create({
      ...req.body,
    });
    res.status(201).send(newBooking);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.delete("/:bookingId", auth, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const removedBooking = await Booking.findById(bookingId);

    if (removedBooking._id.toString() === bookingId) {
      await removedBooking.deleteOne();
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
