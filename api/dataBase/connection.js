import  mongoose from "mongoose"

const DB = "mongodb+srv://fromapi:api123@cluster0.nrszjck.mongodb.net/";

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(DB);
    console.log(`Database connected to:- ${DB}`);
  } catch (err) {
    console.error(`Database connection error: ${err}`);
  }
}

export default connectDB;