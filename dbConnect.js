// const mongoose = require("mongoose");

// module.exports = async () => {
//     const mongoUri =
//         "mongodb+srv://anuj:Ya0fKBalld60gpfs@cluster0.rblpaxc.mongodb.net/?retryWrites=true&w=majority";

//     try {
//         const connect = await mongoose.connect(mongoUri, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//         });

//         console.log(`MongoDB connected: ${connect.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };
const mongoose = require("mongoose");
exports.connect = () => {
  mongoose
    .connect(
      "mongodb+srv://Sachinkumar2004:Sachin%401234@cluster0.rklfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.error(error);
      process.exit(1);
    });
};
