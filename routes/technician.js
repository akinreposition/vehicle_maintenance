const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Technician = require("../models/Technician");

//  @route      GET api/technician
//  @desc       Get all technicians from the server
//  @access     Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById({ user: req.user.id });
    const technician = await Technician.find(user).sort({
      date: -1,
    });
    res.json(technician);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route      POST api/technician
//  @desc       Add new Technician
//  @access     Private
router.post(
  "/",
  [
    auth,
    [
      check("firstName", "First Name is required").not().isEmpty(),
      check("lastName", "Last Name is required!").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName } = req.body;

    try {
      const newTechnician = new Technician({
        firstName,
        lastName,
        user: req.user.id,
      });

      const technician = await newTechnician.save();

      res.json(technician);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//  @route      PUT api/technician/:id
//  @desc       Update technician db
//  @access     Private
router.put("/:id", (req, res) => {
  res.send("Update technician");
});

//  @route      DELETE api/technician:id
//  @desc       Delete technician
//  @access     Private
router.delete("/", (req, res) => {
  res.send("Delete technician");
});

module.exports = router;
