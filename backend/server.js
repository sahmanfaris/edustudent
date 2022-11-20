const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

// connect to db
connectDB();

const app = express();
// allow us to use raw json / instead of bodyparses
app.use(express.json());
// allow us to accept url encoded form / instead of bodyparses
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Selam alejkum");
// });

// users
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
