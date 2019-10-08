function heapSort(arr) {
  const heap = minHeap();
  arr.forEach(val => {
    heap.add(val);
  });
  return arr.map(val => {
    val = heap.poll();
  });
}
