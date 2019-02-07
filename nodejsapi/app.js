//require imports for main app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');

//require employeeController
let employeeController = require('./controllers/employeeController');

//call express server function & use body-parser
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/employees', employeeController);

//listen for server connection on selected port
app.listen(3000, () => console.log('Server listening on port: 3000'));