const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Log = require('../models/Log');

//  @route      GET api/logs
//  @desc       Get all users vehicle log details
//  @access     Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById({ user: req.user.id })
    const logs = await Log.find(user).sort({
      date: -1,
    });
    res.json(logs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route      POST api/logs
//  @desc       Add new Log
//  @access     Private
router.post(
  '/',
  [
    auth,
    [
      check('technician', 'Technician is required').not().isEmpty(),
      check('message', 'Message is required!').not().isEmpty(),
      check('attention', 'Attention is required!').not().isEmpty(),
  ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { technician, message, attention } =
      req.body;

    try {
      const newLog = new Log({
        technician,
        message,
        attention,
        user: req.user.id,
      });

      const log = await newLog.save();

      res.json(log);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//  @route      PUT api/logs/:id
//  @desc       Update log
//  @access     Private
router.put('/:id', (req, res) => {
  res.send("Update log");
});

//  @route      DELETE api/logs/:id
//  @desc       Delete log
//  @access     Private
router.delete('/', (req, res) => {
  res.send("Delete log");
});

module.exports = router;
