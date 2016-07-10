function binarySearch(array, target){
  let start = 0;
  let end = array.length;
  while (start <= end){
    let middle = Math.floor((start + end)/2);
    if ((middle === start || middle === end) && array[middle] !== target){
      return -1;
    }
    if (array[middle] > target){
      end = middle;
    } else if (array[middle] < target){
      start = middle;
    } else {
      return middle;
    }
  }
}