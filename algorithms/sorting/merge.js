

function mergeSort(arr){

  if(arr.length <= 1){
    return arr;
  }

  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeBaseSort(left, right);
}

function mergeBaseSort(left, right){
  const sortedArr = [];
  let min = left.length < right.length ? left: right;
  return sortedArr;
}