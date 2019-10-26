const express = require("express");
const router = express.Router();
const Member = require("../models/memberModel");

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Member.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// ADD A POST
router.post("/", async (req, res) => {
  const member = new Member({
    name: req.body.name,
    hq_level: req.body.hq_level,
    is_officer: req.body.is_officer,
    events: req.body.events,
    donated_old: req.body.donated_old,
    donated_new: req.body.donated_new,
    is_active: req.body.is_active,
    rating_m: req.body.rating_m,
    rating_a: req.body.rating_a
  });
  try {
    const savedMember = await member.save();
    res.json(savedMember);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
