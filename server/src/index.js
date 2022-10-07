require('dotenv').config();

const app = require('./boot/server');
const connection = require('./boot/database');

const { port } = require('./config/server');

function handleStart() {
  console.log(this.address());
  console.log(`Server listening on http://localhost:${port}`);
  connection();
}
app.listen(port, handleStart);
