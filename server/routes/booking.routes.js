const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");
const Booking = require("../models/Booking");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const { orderBy, equalTo } = req.query;
    const list = await Booking.find({ [orderBy]: equalTo });
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
      bookingId: req.bookingId._id,
    });
    console.log(newBooking);
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
    const currentUser = removedBooking.userId.toSigned() === req.user._id;
    const isAdmin = req.userRole === "admin" || "master";

    if (currentUser || isAdmin) {
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
