const allowedIPs = ["10.101.8.51", "10.101.8.122", "10.101.10.14"]; // Liste des IP autorisées

const restrictByIP = (req, res, next) => {
  const clientIP = req.ip;
  if (!allowedIPs.includes(clientIP)) {
    return res.status(403).json({ message: "Accès interdit depuis cette IP." });
  }
  next();
};

module.exports = { restrictByIP };
