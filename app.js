const express = require("express");
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: ['http://example.com',
    'http://localhost:4200',
    'https://www.w3schools.com'],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/image', express.static('./images'))
app.use(express.json());

app.use(require('./src/routes/routes'))

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);

  console.log("Press Ctrl + C To quit.");
});
