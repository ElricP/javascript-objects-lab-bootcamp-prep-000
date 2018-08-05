var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = {};
  newObject.assign(object, {[key]: value});
  return newObject;
}

