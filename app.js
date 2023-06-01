const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const db = require("./utils/db.config")
const modelsFolder = path.join(__dirname, 'models');
const {indexRoutes} = require("./routes/index")
const {doctorsRoutes} = require("./routes/doctors")
const {usersRoutes} = require("./routes/users")
const {reviewsRoutes} = require("./routes/reviews")

fs.readdirSync(modelsFolder)
    .forEach(file => {
        if (file.endsWith('.js')) {
            const model = require(path.join(modelsFolder, file));
        }
    });
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use("/", indexRoutes); 
app.use("/doctors", doctorsRoutes);
app.use("/users", usersRoutes)
// app.use("/reviews", reviewsRoutes)
/* 
if you faced any issues run this command in your terminal before running the app:

export NODE_OPTIONS=--openssl-legacy-provider

*/

var PORT = process.env.PORT || 8000;

db.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`Server now on port ${PORT}!`);
    });
});