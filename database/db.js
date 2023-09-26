const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB is connected!');
    } catch (error) {
        console.log(error.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;