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



