const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUserById(userId, (err, user) => {
    if (err) {
      // Missing proper error handling, should send appropriate error response
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // Missing handling for user not found
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});