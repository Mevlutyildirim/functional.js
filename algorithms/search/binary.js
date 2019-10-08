function BinaryBaseSearch(value, arr){
  const startIndex =0;
  const endIndex =arr.length-1;
  return function binarySearch(startIndex, endIndex) {
    if(endIndex < startIndex){
      return -1;
    }
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  
    if(value === arr[middleIndex]){
      return middleIndex;
    }
    if(value < arr[middleIndex]){
      endIndex = middleIndex-1;
      binarySearch( startIndex, endIndex);
    }else{
     startIndex = middleIndex+1;
     binarySearch(startIndex, endIndex);
    }
  }
}

let deneme = BinaryBaseSearch(4, [1, 2, 3, 4, 14, 19, 20]);
console.log(deneme());

