const express = require("express");
const client = require('../twitter')()
console.log("*".repeat(20), client);

const router = express.Router();

router.get('/tester', (req,res) => {
    client.get('search/tweets', {q: '@fi_ramen OR #fi_ramen'}, function(error, tweets, response) {
        console.log(tweets.statuses[0]);
        tester = tweets.statuses
        res.json(tester)
    });
})

module.exports = router;

