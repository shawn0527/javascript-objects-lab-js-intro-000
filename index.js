var recipes={}

var obj={prop:1}
function updateObjectWithKeyAndValue(object,key,value){
  var newObj=Object.assign({}, object, {[key]:value})
}
updateObjectWithKeyAndValue(obj,'prop2',2)
newObj
