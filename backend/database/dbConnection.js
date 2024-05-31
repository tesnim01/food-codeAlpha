import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb+srv://mimo:xxxxxxxxxx@cluster0.jijxjtq.mongodb.net/")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};