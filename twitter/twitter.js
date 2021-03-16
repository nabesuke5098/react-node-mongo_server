const twitter = require('twitter');
const dotenv = require('dotenv');
dotenv.config({ path: require('find-config')('.env') });

const client = new twitter({
  consumer_key: process.env.API_KEY ,
  consumer_secret: process.env.API_KEY_SECRET ,
  access_token_key: process.env.ACCESS_TOKEN ,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET ,
});

var params = { 
  user_id: process.env.USER_ID ,
  include_rts: false ,
};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(JSON.stringify(tweets));
  } else {
    console.log(error);
  }
});
// module.exports.client = client;