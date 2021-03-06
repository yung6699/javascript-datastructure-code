/*
    이진 탐색
    1. 우선 정렬이 되어야 한다.
    2. 중간에 있는 값을 기준으로 크기를 확인하여 방향을 결정한다.
 */

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16];

function binarySearch(items, target) {
  var first = 0;
  var last = items.length - 1;
  var mid;

  while (first <= last) {
    mid = Math.floor((first + last) / 2);
    if (target == items[mid]) {
      return mid;
    } else {
      if (target < items[mid])
        last = mid - 1;
      else
        first = mid + 1;
    }
  }
  return -1;
}

console.log('인덱스 : ' + binarySearch(array, 10));
console.log('인덱스 : ' + binarySearch(array, 2));
console.log('인덱스 : ' + binarySearch(array, 17));


function recursionBinarySearch(items, target, begin, end) {
  if (begin > end) {
    return -1;
  } else {
    var middle = Math.floor((begin + end) / 2);
    if (target === items[middle]) {
      return middle;
    } else if (target < items[middle]) {
      return recursionBinarySearch(items, target, begin, middle - 1)
    } else {
      return recursionBinarySearch(items, target, middle + 1, end);
    }
  }
}

console.log('인덱스 : ' + recursionBinarySearch(array, 10, 0, array.length - 1));
console.log('인덱스 : ' + recursionBinarySearch(array, 2, 0, array.length - 1));
console.log('인덱스 : ' + recursionBinarySearch(array, 17, 0, array.length - 1));
