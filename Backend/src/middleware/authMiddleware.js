import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token manquant" });
  }

  const token = authHeader.split(" ")[1]; // Format attendu: "Bearer token"

  jwt.verify(token, process.env.JWT_SECRET || "SECRET_KEY", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalide ou expiré" });
    }
    req.user = user; // On ajoute les infos du token dans req.user
    next();
  });
};
