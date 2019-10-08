export default function linearSearch(seek, arr){
  const foundIndex = [];
  arr.forEach((val, index) => {
    if(val == seek){
      foundIndex.push(val);
    }
  });
  return foundIndex;
}