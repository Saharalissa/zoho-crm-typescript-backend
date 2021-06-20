"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializerz = void 0;
const config_1 = require("./config/config");
const user_signature_1 = require("@zohocrm/typescript-sdk/routes/user_signature");
const sdk_config_builder_1 = require("@zohocrm/typescript-sdk/routes/sdk_config_builder");
const file_store_1 = require("@zohocrm/typescript-sdk/models/authenticator/store/file_store");
const logger_1 = require("@zohocrm/typescript-sdk/routes/logger/logger");
const us_data_center_1 = require("@zohocrm/typescript-sdk/routes/dc/us_data_center");
const oauth_token_1 = require("@zohocrm/typescript-sdk/models/authenticator/oauth_token");
const initializer_1 = require("@zohocrm/typescript-sdk/routes/initializer");
class Initializerz {
    static async initialize() {
        let logger = logger_1.Logger.getInstance(logger_1.Levels.INFO, "./config/ts_sdk_log.log");
        let user = new user_signature_1.UserSignature("z.tabani@eonaligner.com");
        let environment = us_data_center_1.USDataCenter.PRODUCTION();
        let token = new oauth_token_1.OAuthToken(config_1.config.client_id, config_1.config.client_secret, config_1.config.refresh_token, oauth_token_1.TokenType.REFRESH, config_1.config.redirect_url);
        let tokenstore = new file_store_1.FileStore("./config/ts_sdk_tokens.txt");
        let sdkConfig = new sdk_config_builder_1.SDKConfigBuilder().setPickListValidation(false).setAutoRefreshFields(true).build();
        let resourcePath = "./config";
        await initializer_1.Initializer.initialize(user, environment, token, tokenstore, sdkConfig, resourcePath, logger);
    }
}
exports.Initializerz = Initializerz;
Initializerz.initialize();
