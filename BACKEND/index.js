import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookroute from "./route/book.route.js"
import userroute from "./route/user.route.js"
import contactroute from "./route/contact.route.js"


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config()

const PORT = process.env.PORT || 4000;
const URI= process.env.MongoDBURI

// connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/Book", bookroute);
app.use("/user", userroute);
app.use("/Contact", contactroute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})