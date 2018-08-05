var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = new Object();
  newObject.assign(object, {[key]: value});
  return newObject;
}

