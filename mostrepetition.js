// Ex 2: Given an array of integers, find integers with the most repetitions. If multiple numbers have the same maximum number of repetition, export all of them.
// Maximum 3 rounds, not nested.

function mostRepetition(arr){
  // To get all index of multiple number have the same maximun number
  function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
  }
  // Display result in format
  function displayResuit(item, index) {
    console.log("The most repition is number: "+ single_arr[item] + " with the repetition rate is: " + most)
  }

// Create a no duplicate array, and with correspond repetition time in another array
  const single_arr = [];
  const repition_rate = []; 
  var j = 0;

  // Check whether element in array appear once: if not appear yet, add to new array - align appear time = 1, 
  // else increase the appear time
  for (var i = 0; i < arr.length; i++){
    if(!single_arr.includes(arr[i])){
      single_arr[j++] = arr[i];
      repition_rate[single_arr.length-1] = 1;
    }
    else {
      var index = single_arr.indexOf(arr[i]);
      repition_rate[index]++;
    }
  }
  console.log(single_arr);
  console.log("with correspond repetition: ");
  console.log(repition_rate);

  var most = repition_rate[0];

  for (var i = 0; i < repition_rate.length; i++) {
      if (most < repition_rate[i] ) {
          most = repition_rate[i];
      }
  }
  getAllIndexes(repition_rate, most).forEach(displayResuit);
}

function shorterUsingReduce(arr){
  function getKeyByValue(object, value) {
    return Object.keys(object).filter(key => object[key] === value); 
    //use filter to find all element with same Max Rate instead of find: only first element
  }
  let rate = [], maxRate;
  let countedRepetition = arr.reduce(function (allNumber, item) {
    if (item in allNumber) {
      allNumber[item]++; 
      rate.push(allNumber[item]);
    }
    else {allNumber[item] = 1;}
    maxRate = Math.max(...rate);

    return allNumber;
  }, {});

  console.log(countedRepetition);
  console.log("The most repetion is number:",getKeyByValue(countedRepetition,maxRate), 'with the repetition rate is: ', maxRate);
  
  // const key = Object.keys(countedRepetition).filter(key => countedRepetition[key] === maxRate);
  // console.log(key);
}


var arr = [1,2,2,3,4,4,4,5,6];
console.log("First way: ");
mostRepetition(arr);

console.log("\nSecond way: ");
shorterUsingReduce(arr);