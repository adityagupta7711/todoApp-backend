const Note = require("../models/Note");

// Create note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title,
      content,
      userId: req.userId,  // FIXED
    });

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get notes of logged-in user
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId }); 
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update note
exports.updateNote = async (req, res) => {
  try {
    const updated = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, 
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete note
exports.deleteNote = async (req, res) => {
  try {
    await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId, // FIXED
    });

    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
