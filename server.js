const express = require("express");
// const connectDB = require("./config/db");
const path = require("path");

const app = express();

//  Connect Database
// connectDB();

//  Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/logs", require("./routes/logs"));
app.use("/api/technician", require("./routes/technician"));

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  //  Set static folder
  app.use(express.static(client / build));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
// port can change
const PORT = process.env.PORT || 5533;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
