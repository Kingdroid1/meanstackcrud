//require imports for DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanstackcrud', (err) => {
if (!err)
console.log('MongoDB connection successfull..');
else
console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

//export mongoose for use across files
module.exports = mongoose;