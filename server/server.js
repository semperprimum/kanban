const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const port = process.env.PORT || 9000;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/boards/", require("./routes/boardRoutes"));
app.use("/api/boards/", require("./routes/taskRoutes"));
app.use("/api/boards/", require("./routes/columnRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
