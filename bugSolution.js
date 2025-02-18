const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUserById(userId, (err, user) => {
    if (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' }); // Send JSON error response
      return; // Important: Stop further execution
    }
    if (!user) {
      res.status(404).json({ error: 'User not found' }); // Send 404 with a descriptive error
      return; // Important: Stop further execution
    }
    res.json(user);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});