const express = require("express");
const router = express.Router();
const Event = require("../models/eventModel");

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Event.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// ADD A POST
router.post("/", async (req, res) => {
  const event = new Event({
    name: req.body.name,
    action1: req.body.action1,
    action2: req.body.action2,
    action3: req.body.action3,
    facilities: req.body.facilities,
    prepared: req.body.prepared,
    score: req.body.score
  });
  try {
    const savedRating = await event.save();
    res.json(savedRating);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET POSTS BY ID
router.get("/:eventId", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE POST
router.delete("/:eventId", async (req, res) => {
  try {
    const removedEvent = await Event.remove({ _id: req.params.postId });
    res.json(removedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE POST
router.patch("/:eventId", async (req, res) => {
  try {
    const updatedEvent = await Event.updateOne(
      { _id: req.params.eventId },
      {
        $set: {
          name: req.body.name,
          action1: req.body.action1,
          action2: req.body.action2,
          action3: req.body.action3,
          facilities: req.body.facilities,
          prepared: req.body.prepared,
          score: req.body.score
        }
      }
    );
    res.json(updatedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/prepared/:eventId", async (req, res) => {
  try {
    const updatedEvent = await Event.updateOne(
      { _id: req.params.eventId },
      {
        $set: {
          name: req.body.name,
          action1: req.body.action1,
          action2: req.body.action2,
          action3: req.body.action3,
          facilities: req.body.facilities,
          prepared: req.body.prepared,
          score: req.body.score
        }
      }
    );
    res.json(updatedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
