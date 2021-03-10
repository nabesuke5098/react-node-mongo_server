const twitter = require('twitter');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const client = new twitter({
  consumer_key: process.env.API_KEY ,
  consumer_secret: process.env.API_KEY_SECRET ,
  access_token_key: process.env.ACCESS_TOKEN ,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET ,
});

var params = {screen_name: '@kenken5018'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log(error);
  }
});
// module.exports.client = client;