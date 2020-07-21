var  bufferString = "NAME, CATEGORY, PRICE \nXiaomi Redmi 5A, Smartphone, 1199000\nMacbook Air, Laptop, 13775000\nSamsung Galaxy J7, Smartphone, 3549000\nDELL XPS 13, Laptop, 26799000\nXiaomi Mi 6, Smartphone, 5399000\nLG V30 Plus, Smartphone, 10499000";

var arr = bufferString.split('\n');     

var jsonObj = [];
var headers = arr[0].split(',');
for(var i = 1; i < arr.length; i++) {
  var data = arr[i].split(',');
  var obj = {};
  for(var j = 0; j < data.length; j++) {
     obj[headers[j].trim()] = data[j].trim();
  }
  jsonObj.push(obj);
}
console.log(JSON.stringify(jsonObj));