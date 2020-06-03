const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://midhun:midhun123@cluster0-c1hxm.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Database connected');
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = connectDB;