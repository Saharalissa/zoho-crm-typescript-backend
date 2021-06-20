import {config} from "./config/config"
import {UserSignature} from "@zohocrm/typescript-sdk/routes/user_signature"
import {SDKConfigBuilder} from "@zohocrm/typescript-sdk/routes/sdk_config_builder"
import {FileStore} from "@zohocrm/typescript-sdk/models/authenticator/store/file_store"
import {SDKConfig} from "@zohocrm/typescript-sdk/routes/sdk_config"
import {Levels,Logger} from "@zohocrm/typescript-sdk/routes/logger/logger"
import {Environment} from "@zohocrm/typescript-sdk/routes/dc/environment"
import {USDataCenter} from "@zohocrm/typescript-sdk/routes/dc/us_data_center"
import {OAuthToken,TokenType} from "@zohocrm/typescript-sdk/models/authenticator/oauth_token"
import {Initializer} from "@zohocrm/typescript-sdk/routes/initializer"

export class Initializerz{

    public static async initialize(){

        let logger: Logger = Logger.getInstance(Levels.INFO, "./config/ts_sdk_log.log");

        let user: UserSignature = new UserSignature("z.tabani@eonaligner.com");

        let environment: Environment = USDataCenter.PRODUCTION();

        let token: OAuthToken = new OAuthToken(config.client_id, config.client_secret, config.refresh_token, TokenType.REFRESH, config.redirect_url);

        let store: FileStore = new FileStore("./config/ts_sdk_tokens.txt");

        let sdkConfig: SDKConfig = new SDKConfigBuilder().setPickListValidation(false).setAutoRefreshFields(true).build();

        let resourcePath: string = "./config";


        await Initializer.initialize(user, environment, token, store, sdkConfig, resourcePath, logger);
    }
}
Initializerz.initialize()
