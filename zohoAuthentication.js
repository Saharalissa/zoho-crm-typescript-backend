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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializerz = void 0;
var config_1 = require("./config/config");
var user_signature_1 = require("@zohocrm/typescript-sdk/routes/user_signature");
var sdk_config_builder_1 = require("@zohocrm/typescript-sdk/routes/sdk_config_builder");
var file_store_1 = require("@zohocrm/typescript-sdk/models/authenticator/store/file_store");
var logger_1 = require("@zohocrm/typescript-sdk/routes/logger/logger");
var us_data_center_1 = require("@zohocrm/typescript-sdk/routes/dc/us_data_center");
var oauth_token_1 = require("@zohocrm/typescript-sdk/models/authenticator/oauth_token");
var initializer_1 = require("@zohocrm/typescript-sdk/routes/initializer");
var Initializerz = /** @class */ (function () {
    function Initializerz() {
    }
    Initializerz.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var logger, user, environment, token, store, sdkConfig, resourcePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger = logger_1.Logger.getInstance(logger_1.Levels.INFO, "./config/ts_sdk_log.log");
                        user = new user_signature_1.UserSignature("z.tabani@eonaligner.com");
                        environment = us_data_center_1.USDataCenter.PRODUCTION();
                        token = new oauth_token_1.OAuthToken(config_1.config.client_id, config_1.config.client_secret, config_1.config.refresh_token, oauth_token_1.TokenType.REFRESH, config_1.config.redirect_url);
                        store = new file_store_1.FileStore("./config/ts_sdk_tokens.txt");
                        sdkConfig = new sdk_config_builder_1.SDKConfigBuilder().setPickListValidation(false).setAutoRefreshFields(true).build();
                        resourcePath = "./config";
                        return [4 /*yield*/, initializer_1.Initializer.initialize(user, environment, token, store, sdkConfig, resourcePath, logger)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Initializerz;
}());
exports.Initializerz = Initializerz;
Initializerz.initialize();
