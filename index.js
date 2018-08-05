var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign(object);
  newObject = Object.assign({[key] : value});
  return newObject;
}

