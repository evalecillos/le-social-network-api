// GIVEN a social network API
// WHEN I enter the command to invoke the application
// THEN my server is started and the Mongoose models are synced to the MongoDB database
// WHEN I open API GET routes in Insomnia for users and thoughts
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete users and thoughts in my database
// WHEN I test API POST and DELETE routes in Insomnia
// THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list



const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/le-social-network-api",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
