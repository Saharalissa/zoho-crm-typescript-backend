"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
var bodyParser = require('body-parser');
var passport = require('./middlewares/passport');
var app = express_1.default();
var port = process.env.PORT || 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet_1.default());
app.use(morgan_1.default("tiny"));
// parse application/json
app.use(bodyParser.json());
//Initializing Zoho
require("./zohoAuthentication.ts");
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors_1.default(corsOptions));
//Home page
app.get("/", function (req, res) {
    res.send("Hello to typescript CRM server");
});
//Get all leads
app.get('/lead', function (req, res, next) {
    require('./routes/getLeads');
});
//create new lead
app.post('/lead/create', passport.authenticate("jwt", { session: false }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Last_Name, Contact_Method, Mobile, Clinic_Name, Country, City, Source, Medium, Campaign_Name, Adset_Name, Content, Records;
    return __generator(this, function (_a) {
        Last_Name = req.body.Last_Name;
        Contact_Method = req.body.Contact_Method;
        Mobile = req.body.Mobile;
        Clinic_Name = req.body.Clinic_Name;
        Country = req.body.Country;
        City = req.body.City;
        Source = req.body.Source;
        Medium = req.body.Medium;
        Campaign_Name = req.body.Campaign_Name;
        Adset_Name = req.body.Adset_Name;
        Content = req.body.Content;
        if (Last_Name) {
            Records = require('./routes/leadCreate').Records;
            Records.createRecords(Last_Name, Contact_Method, Mobile, Clinic_Name, Country, City, Source, Medium, Campaign_Name, Adset_Name, Content);
            res.status(200).json('200');
        }
        else {
            res.status(401).json('401');
        }
        return [2 /*return*/];
    });
}); });
app.post("/register", function (req, res) {
    var name = req.body.name;
    var url = req.body.url;
    if (name && url) {
        var date = new Date();
        var payload = { name: name, date: date, url: url };
        var secret = process.env.SECRET_KEY;
        console.log(secret);
        var token = jsonwebtoken_1.default.sign(payload, secret);
        res.send({ token: token });
    }
    else {
        res.status(401).json({ msg: "invalid user" });
    }
});
app.listen(port, function () { return console.log("Server is listening on port " + port + "!"); });
