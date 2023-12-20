const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const authRoutes = require("./routes/authRoutes")
const tokoRoutes = require("./routes/tokoRoutes")
const productRoutes = require("./routes/productRoutes")
const diskusiRoutes = require("./routes/diskusiRoutes")

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Routes
app.use('/',authRoutes)
app.use('/',tokoRoutes)
app.use('/',productRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/',diskusiRoutes)
app.use('/diskusi', express.static(path.join(__dirname, 'diskusi')));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
