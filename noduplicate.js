// Ex 1: Given an array of integers, removing duplicate elements and creating an array whose elements are unique. 
// (Eg: [1,2,2,3,4,4,4,5,6] => [1,2,3,4,5,6]). Find 3-4 ways to solve this.

function createTempModifyOld(){
  function removeDuplicates(arr, n)
  {
    // Return, if array is empty or contains a single element
    if (n==0 || n==1) return n;
 
    var temp = [];
 
    // Start traversing elements
    var j = 0;
    for (var i=0; i<n-1; i++)
 
        // If current element is not equal to next element then store that current element
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
 
    // Store the last element as whether it is unique or repeated, it hasn't stored previously
    temp[j++] = arr[n-1];

    return temp;
  }
  var arr = [1,2,2,3,4,4,4,5,6];
  // Print updated array
  console.log(removeDuplicates(arr, arr.length));
}

function modifyCurrent(){
  function removeDuplicates(arr, n)
  {
    // Return, if array is empty or contains a single element
    if (n==0 || n==1)
        return n;
 
    // Start traversing elements
    var j = 0;
    for (var i=0; i<n-1; i++)
 
        // If current element is not equal to next element then store that current element
        if (arr[i] != arr[i+1])
            arr[j++] = arr[i];
 
    // Store the last element as whether it is unique or repeated, it hasn't stored previously
    arr[j++] = arr[n-1];

    return j;
  }
  var arr = [1,2,2,3,4,4,4,5,6];
  var n = arr.length;
  
  // removeDuplicates() returns new size of array.
  var n = removeDuplicates(arr, n);
  
  // Print updated array
  for (var i=0; i<n; i++)
  console.log(arr[i]+" ");
}

function notSequentialDup(){
  var arr = [1,2,2,3,4,4,4,5,6,7,6,8,10,2,9];

  // Create a new array
  const modify_arr = [];
  var j = 0;

  // Check whether element in array appear once: if not appear yet, add to new array, else skip
  for (var i = 0; i < arr.length; i++)
    if(!modify_arr.includes(arr[i]))
      modify_arr[j++] = arr[i];
    
  console.log(modify_arr);
  return modify_arr;
}

function notSequentialDup2(){
  var arr = [1,2,2,3,4,4,4,5,6,7,6,8,10,2,9];

  //Create a new array
  const modify_arr = [];
  var j = 0;

  //Check whether element in array appear once: if not appear yet, add to new array, else skip
  for (var i = 0; i < arr.length; i++)
    if(modify_arr.indexOf(arr[i])===-1)
      modify_arr[j++] = arr[i];
    
  console.log(modify_arr);
  return modify_arr;
}

function usingFilter(){
  let arr = [1,2,2,3,4,4,4,5,6];
  
  // indexOf only return the index of the first element
  console.log(
    arr.filter((item, index) => {
    return arr.indexOf(item) === index; 
  }));
}

function usingSet(){
  let arr = [1,2,2,3,4,4,4,5,6];
  // Set only store unique values.
  const uniqueSet = new Set(arr);

  // Convert back to array by using the spread operator ...
  const backToArray = [...uniqueSet];
  console.log(backToArray);
  return backToArray;
}

function usingSetoneline(){
  let arr = [1,2,2,3,4,4,4,5,6];
  console.log(Array.from(new Set(arr)));
  return Array.from(new Set(arr)); 
}

function usingMap(){
  function noDup(item, index){
    return arr.indexOf(item) === index;
  }
  let arr = [1,2,2,3,4,4,4,5,6];
  let modify_arr = [];
  let temp = arr.map(noDup)
  for (let i = 0; i < arr.length ; i++){
    if (temp[i]){
      modify_arr.push(arr[i]);
    }
  }
  console.log(modify_arr);
}

function hashMapComplexityN(){
  function removeDups(arr)
{
  // Hash map which will store the elements which has appeared previously.
    let mp = new Map();
    let modify_arr = [];
  
    for (let i = 0; i < arr.length; ++i)
    {
      // Print the element if it is not there in the hash map
      if (mp.get(arr[i]) == null) // get in map: looking for that item
        modify_arr.push(arr[i]);
   
       // Insert the element in the hash map
       mp.set(arr[i], true);
    }
    console.log(modify_arr);
    return modify_arr;
}
 
// Driver Code
let arr=[1, 2, 5, 1, 7, 2, 4, 2 ];
removeDups(arr);
}

function usingReduce(){
  let array = [1,2,2,3,4,4,4,5,6];
  console.log(array.reduce((unique, item) => {
    // console.log(
    //   // a. Item
    //   item,
    //   // b. Final Array (Accumulator)
    //   unique,
    //   // c. Condition (Remember it only get pushed if this returns `false`)
    //   unique.includes(item),
    //   // d. Reducer Function Result
    //   unique.includes(item) ? unique : [...unique, item],
    // );
  
    return unique.includes(item) ? unique : [...unique, item];
  }, [])); // The initial value of our Accumulator is an empty array
}

function usingFind(){
  let arr = [1,2,2,3,4,4,4,5,6]; //indexOF: index of the first same number;  index: real index
  let modify_arr = [];
  function noDups(item, index){
    if((arr.indexOf(item) === index)){
      modify_arr.push(item);
    }
  }

    arr.find(noDups);
    console.log(modify_arr);

}

// 1st: Create temp to store no duplicate number
console.log("1st way: ");
createTempModifyOld()

// 2nd: Modify current array without creating temp
console.log("\n2nd way: ");
modifyCurrent();

// 3rd: Check for none sequential duplicate using include
console.log("\n3rd way: ");
notSequentialDup();

// 4th: Check for none sequential duplicate using indexOf
console.log("\n4th way: ");
notSequentialDup2();

// 5th: Using Filter
console.log("\n5th way: ");
usingFilter();

// 6hth: Using Set
console.log("\n6th way - Using Set: ");
usingSet();

//7th: Oneline 
console.log("\n7th way - Using Set Oneline: ");
usingSetoneline();

// 8th: Using Map
console.log("\n8th way- Using Map: ");
usingMap();

// 9th: Using HashMap with complexity O(n)
console.log("\n9th way - Using HashMap with complexity O(n): ");
hashMapComplexityN();

// 10th: Using Reduce
console.log("\n10th way - Using Reduce: ");
usingReduce();

// 11th: Using Find
console.log("\n11th way - Using Find: ");
usingFind();


