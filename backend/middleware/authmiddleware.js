const jwt = require("jsonwebtoken");

function protect(req, res, next) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId;
      return next(); // 🔑 THIS MUST EXIST
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }

  return res.status(401).json({ message: "Not authorized, no token" });
}

module.exports = protect;
