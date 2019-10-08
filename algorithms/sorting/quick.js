
function quickSort(arr){
  if( arr <= 1 ){
    return arr;
  }
  const pivot = arr[0];
  const leftArr = arr.filter(val => val < pivot);
  const rightArr = arr.filter(val => val > pivot);
  const centerArr = arr.filter(val => val === pivot);
  const leftSortedArr = quickSort(leftArr);
  const rightSortedArr = quickSort(rightArr);
  return leftSortedArr.concat(centerArr, rightSortedArr);
}

console.log(quickSort([1, 10, 8, 5])[2]);