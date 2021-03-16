const nlpUtils = require('./natural.language.utils');

const text = 'あなたが好き';

const result = nlpUtils.sendAnalyzeSentiment(text);
result
  .then(res => res.json())
  .then(data => {
    console.log(data.sentences);
  })
  .catch((err) => {
    console.log(err);
  });