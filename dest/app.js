"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
// import passport from'./middlewares/passport';
// import CreateDto from './dto/dtoCreateLead';
// import RegisterDto from './dto/dtoRegister';
const app = express_1.default();
const port = process.env.PORT || 3000;
require("./zohoAuthentication.ts");
app.use(helmet_1.default());
app.use(morgan_1.default("tiny"));
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors_1.default(corsOptions));
//Home page
app.get("/", (req, res) => {
    res.send("Hello to typescript CRM server");
});
//   app.post("/register", (req, res) => {
//     const dto = RegisterDto.RegisterDto.register(req)
//     if (dto.name && dto.url) {
//       let date = new Date();
//       let payload = { name: dto.name, date, url: dto.url };
//       let token = jwt.sign(payload, process.env.SECRET_KEY);
//       res.send({ token: token });
//     } else {
//       res.status(401).json({ msg: "invalid user" });
//     }
//   });
//   //Initializing Zoho
//   require("./lib/zohoAuthentication");
//   //Create new lead
//   app.post(
//     "/lead",
//     passport.authenticate("jwt", { session: false }),
//     async (req, res) => {
//     const dto = CreateDto.CreateDto.createLead(req)
//       if (dto.Last_Name) {
//         const { insertRecords } = require("./services/leadCreate");
//         insertRecords(dto);
//         res.sendStatus(200);
//       } else {
//         res.sendStatus(400);
//       }
//     }
//   );
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
