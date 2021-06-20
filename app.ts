import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
var bodyParser = require('body-parser')

const passport = require('./middlewares/passport')
const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(helmet());
app.use(morgan("tiny"));
 
// parse application/json
app.use(bodyParser.json())

//Initializing Zoho
require("./zohoAuthentication.ts")

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

  //Home page
app.get("/", (req, res) => {
    res.send("Hello to typescript CRM server");
  });

//Get all leads
app.get('/lead', (req, res, next) => {
  require ('./routes/getLeads')
})

//create new lead
app.post('/lead/create', passport.authenticate("jwt", { session: false }), async (req, res) => {

  // Production fields
  const Last_Name = req.body.Last_Name;
  const Contact_Method = req.body.Contact_Method ;
  const Mobile = req.body.Mobile;
  const Clinic_Name = req.body.Clinic_Name;
  const Country = req.body.Country;
  const City = req.body.City;
  const Source = req.body.Source;
  const Medium = req.body.Medium;
  const Campaign_Name = req.body.Campaign_Name;
  const Adset_Name = req.body.Adset_Name;
  const Content = req.body. Content;

  if(Last_Name) {
  const {Records} = require('./routes/leadCreate');
  Records.createRecords(Last_Name, Contact_Method, Mobile, Clinic_Name, Country, City, Source, Medium, Campaign_Name, Adset_Name, Content);
  res.status(200).json('200')
  } else {
  res.status(401).json('401')
  }

})
  
  app.post("/register", (req, res) => {
   const name = req.body.name;
   const url = req.body.url;
  
    if (name && url) {
      let date : Date = new Date();
      let payload  : any = { name: name, date: date, url: url };
      let secret : any = process.env.SECRET_KEY;
      console.log(secret)
      let token : string = jwt.sign(payload, secret);
  
      res.send({ token: token });
    } else {
      res.status(401).json({ msg: "invalid user" });
    }
  });

  
  app.listen(port, () => console.log(`Server is listening on port ${port}!`));
