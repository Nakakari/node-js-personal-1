const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://user:123@cluster0.lkqfufx.mongodb.net/?retryWrites=true&w=majority")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("MongoDB my_blog connection error:", err);
});

module.exports = connect;