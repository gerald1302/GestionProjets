export const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Accès refusé : rôle non autorisé" });
    }
    next();
  };
};
// roleMiddleware.js vérifiera si le rôle de l’utilisateur (req.user.role) est autorisé pour accéder à une route