const config: any = {
    client_id :process.env.CLIENT_ID,
    client_secret :process.env.CLIENT_SECRET,
    redirect_url :process.env.REDIRECT_URL,
    refresh_token : process.env.REFRESH_TOKEN,
    user_identifier :process.env.USER_IDENTIFIER
   }

export {config}