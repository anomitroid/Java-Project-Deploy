const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve index.html and other static files from the root directory.
app.use(express.static(path.join(__dirname)));

// Map '/app/src/' to the local 'src' folder.
app.use('/app/src', express.static(path.join(__dirname, 'src')));

app.use('/app/src', (req, res, next) => {
    if (req.path.endsWith('.jar')) {
      res.type('application/java-archive');
    }
    next();
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
