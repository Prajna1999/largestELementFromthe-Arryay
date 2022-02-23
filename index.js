function largestOfFour(arr){
  let largestArr=[]
  for( let subArr of arr){
   largestArr.push((Math.max(...subArr)));
  }
 
  return largestArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// procedural approach.
function largestOfFour(arr){
  let result=[];
  for(let i=0; i<arr.length; i++){
    let largestNumber=arr[i][0];
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j]>largestNumber){
        largestNumber=arr[i][j];
      }
      
    }
    result[i]=largestNumber;
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

