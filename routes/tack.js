
const express = require('express');
const router = express.Router();
const pool = require('../db');
const { auth } = require('../middleware/auth');


router.get('/', auth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, title, completed FROM tasks WHERE user_id = ?',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/', auth, async (req, res) => {
  const { title } = req.body;
  if (!title || title.length < 3) {
    return res.status(400).json({ error: 'Title must be at least 3 chars' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO tasks (title, user_id) VALUES (?, ?)',
      [title, req.user.id]
    );
    res.status(201).json({ id: result.insertId, title, completed: false });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});


router.put('/:id', auth, async (req, res) => {
  const { title, completed } = req.body;
  const taskId = req.params.id;

  try {
    const [result] = await pool.query(
      'UPDATE tasks SET title = ?, completed = ? WHERE id = ? AND user_id = ?',
      [title, completed, taskId, req.user.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ id: taskId, title, completed });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;