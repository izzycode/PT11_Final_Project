var Twitter = require('twitter');
require('dotenv').config()


let auth=  new Buffer(process.env.CONSUMER_KEY+":"+process.env.CONSUMER_SECRET).toString('base64')

var client

const twitter = () => {
    fetch('https://api.twitter.com/oauth2/token', {
        method: "POST",
        headers: {
            "Authorization": "Basic " + auth
        }
    })
        .then(res=>res.json())
        .then(response => {
            console.log("*".repeat(30), response);
            
            client = new Twitter({
                consumer_key: process.env.CONSUMER_KEY,
                consumer_secret: process.env.CONSUMER_SECRET,
                bearer_token: response.access_token
            });
        })
}

module.exports = twitter
