const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://muskansaini758:msaini1234@api-practice.ofvzpri.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(
      `\n MongoDB connected !! DB HOST :${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log(err, "error");
  }
};
module.exports = connectDB;
