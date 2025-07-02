const express = require('express'); // Import Express framework
const app = express();              // Create Express app
const port = 3000;                  // Define port number

// Define route for HTTP GET requests to '/'
app.get('/', (req, res) => res.send('Hello from Node.js App!'));

// Start server and listen on port 3000
app.listen(port, () => console.log(`App running on port ${port}`));

