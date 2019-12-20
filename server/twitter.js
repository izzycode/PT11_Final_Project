var Twitter = require('twitter');
const fetch = require('node-fetch')
require('dotenv').config()


let auth=  new Buffer(process.env.CONSUMER_KEY+":"+process.env.CONSUMER_SECRET).toString('base64')

const twitter = () => {

    let request = fetch('https://api.twitter.com/oauth2/token', {
                        method: "POST",
                        headers: {
                            "Authorization": "Basic " + auth,
                            "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        body: 'grant_type=client_credentials'

                    })
    request = request.then(res=>res.json())
    response = request.then(response => {
                            console.log("*".repeat(30), "Response: ",response);

        return new Twitter({
            consumer_key: process.env.CONSUMER_KEY,
            consumer_secret: process.env.CONSUMER_SECRET,
            bearer_token: response.access_token,
            access_token_key: process.env.ACCESS_TOKEN_KEY,
            access_token_secret: process.env.ACCESS_TOKEN_SECRET
        });
    })
    return response
}
twitter()
module.exports = twitter
