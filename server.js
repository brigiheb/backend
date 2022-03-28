const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors");
const app = express();
const degreeRoute = require("./app/routes/degree.route")
const experienceRoute = require("./app/routes/experience.route")
const jobRoute = require("./app/routes/job.route")
const disponibiliteRoute = require("./app/routes/disponibilite.route")
const linkRoute = require("./app/routes/link.route")
const candidatureRoute = require("./app/routes/candidature.route")
const offreRoute = require("./app/routes/offre.route")






var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});



const db = require("./app/models")

app.use(degreeRoute)
app.use(experienceRoute)
app.use(jobRoute)
app.use(disponibiliteRoute)
app.use(linkRoute)
app.use(candidatureRoute)
app.use(offreRoute)




db.sequelize.sync();




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});