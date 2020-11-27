const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:molu@cluster0.wz4ci.mongodb.net/<dbname>?retryWrites=true&w=majority"; 


const connectDB = async () => {
   await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true   });
   console.log('db connected!..');
};
module.exports = connectDB; 