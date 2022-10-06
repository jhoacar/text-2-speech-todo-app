require('dotenv').config();

const app = require('./boot/server');
const connection = require('./boot/database');

const { port } = require('./config/server');

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  connection();
});
