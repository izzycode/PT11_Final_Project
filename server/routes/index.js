const express = require("express");
const Twitter = require('twitter');
require('dotenv').config()

const router = express.Router();
let obj = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  bearer_token: process.env.BEARER_TOKEN
}

const client = new Twitter(obj)


router.get('/search', (req,res) => {
  let query = req.query.q.trim()
  client.get('search/tweets', {
    q: query
  }, function (error, tweets, response) {
    let filtered = tweets.statuses.filter(tweet => {
      if( tweet.entities.hashtags.includes(query) || !!tweet.text.match(new RegExp(`[\#|\@]${query} `, "i")) ) {
        return true
      }
      else {
        return false
      }
    })
    res.json(filtered)
  })
})

module.exports = router;
