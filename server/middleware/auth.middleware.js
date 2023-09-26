const tokenService = require("../services/token.services");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = tokenService.validateAccess(token);
    const currentUserData = await User.findById(data);

    req.user = data;
    req.userRole = currentUserData.role;

    next();
  } catch (e) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
