"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var config = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_url: process.env.REDIRECT_URL,
    refresh_token: process.env.REFRESH_TOKEN,
    user_identifier: process.env.USER_IDENTIFIER
};
exports.config = config;
