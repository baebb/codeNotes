//mapping a thing to a hashmap
hashMap = {};
hashMap["id"] = "stored value";

//calculating mode (highest occuring)
var stringArr = []; //original array
var storage_array = []; //counting array
var stringHashMap = {}; //id map

var topOccurance = 0;
var secondOccurance = 0;
//...

for (var i = 0; i < stringArr.length; i++) { //give each storage array an initial value of 0 and map
  stringHashMap[stringArr[i]] = i;
  storage_array[i] = 0;
}

//on each loop:
var id = stringHashMap[input]; //get string id

storage_array[id]++; //increase increment of input

if (storage_array[id] > topOccurance) { //check if this is bigger than top, change top name
  topName = input;
  topOccurance = storage_array[id];
  continue;
}

if (storage_array[id] > secondOccurance) { //check if this is bigger than second, change second name
  secondName = input;
  secondOccurance = storage_array[id];
  continue;
}
//..


//calculating max value you can take based on weight
function getTheMax(cakes, weight) {
  var maxMap = [];
  
  for (var i = 0; i <= weight; i++) {
    maxMap[i] = 0;
  }
  
  
  for (var currentCap = 0; currentCap <= weight; currentCap++) {
    
    var maxValue = 0;
    
    for (var j = 0; j < cakes.length; j++) {
      
      var cake = cake[j];
      
      if (cake.weight <= currentCap) {
        var remainder = currentCap - cake.weight;
        
        if (cake.weight == currentCap) {
          maxValue = Math.max(maxValue, cake.value);
        }
        
        if (cake.weight < currentCap) {
          maxValue = Math.max(maxValue, (cake.value + maxMap[remainder]));
        }
      }
    }
    
    maxMap[currentCap] = maxValue;
  }
  
  return maxMap[weight];
}

//checking for length in lists
function newsFeed(videoList, imageList, newsList) {
  
  var lists = [videoList, imageList, newsList];
  
  function hasItemsRemaining() {
    return videoList.length > 0 || imageList.length > 0 || newsList.length > 0;
  }
  
  while (hasItemsRemaining()) {
    var hasPushed = false;
    lists.forEach(function (list) {
      if (list[0] && list[0].relScore > threshold) {
        unifiedList.push(list[0].shift());
        hasPushed = true;
      }
    })
  }
  
}