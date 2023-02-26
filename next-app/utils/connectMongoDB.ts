import mongoose from "mongoose";


mongoose.set('strictQuery', false);

const connectMongoDB = async () => {

    console.log("mongoose - Connecting to MongoDB");

    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/StudentsCSD');
        console.log("mongoose - Connected to MongoDB");
    } catch (err) {

        console.log("mongoose - Error connecting to MongoDB");
        console.error(err);
    };

};

export default connectMongoDB;