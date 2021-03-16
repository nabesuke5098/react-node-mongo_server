const types = {
  number: Number,
  string: String,
  boolean: Boolean,
  object: Object,
  function: Function
};

function makeTwitterSchema(data) {
  let schema = {};
  for (let key in data) {
    const type = typeof data[key];
    if(data[key] === null) {
      schema[key] = Object;
    } else if(type === 'object') {
      schema[key] = makeTwitterSchema(data[key]);
    } else {
      schema[key] = types[type];
    }
  }
  return schema;
}

//
const Twitter = new mongoose.Schema(makeTwitterSchema(data, ''));

exports.Twitter = mongoose.model("Twitter", Twitter);
