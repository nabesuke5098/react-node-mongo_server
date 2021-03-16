const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({ path: require('find-config')('.env') });


exports.sendAnalyzeSentiment = function(text) {
  const apiKey = process.env.NLP_API_KEY;
  const apiEndpoint = process.env.NLP_URL + apiKey;

  const textFormat = {
    language: 'ja',
    type: 'PLAIN_TEXT',
    content: text
  };

  const data = {
    document: textFormat,
    encodingType: 'UTF8'
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };

  const response = fetch(apiEndpoint, options);
  return response;
};

