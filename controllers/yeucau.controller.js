const LopMoi = require("../models/yeucau.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const lopmoi = new LopMoi({
    tieude = req.body.tieude,
    ghichu= req.body.sdt,
    noidung= req.body.diaChi,
    
    
  });

  // Save Customer in the database
  Customer.create(lopmoi, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};