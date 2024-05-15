
class MinHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(childInd) {
        return parseInt((childInd - 1) / 2)
    }
    getLeftChildIndex(parentInd) {
        return (parentInd * 2) + 1
    }
    getRightChildIndex(parentInd) {
        return (parentInd * 2) + 2
    }
    getParent(index) {
        return this.heap[this.getParentIndex(index)]
    }
    getRightChild(index) {
        return this.heap[this.getRightChildIndex(index)]
    }
    hasParent(index) {
        return this.heap[this.getParentIndex(index)] >= 0
    }
    hasLeftChildIndex(index) {
        return this.heap[this.getLeftChildIndex(index)] < this.heap.length
    }
    hasRightChildIndex(index) {
        return this.heap[this.getRightChildIndex(index)] < this.heap.length
    }
    swap(ind1, ind2) {
        [this.heap[ind1], this.heap[ind2]] = [
            this.heap[ind2],
            this.heap[ind1]
        ]
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (this.hasParent(currentIndex) && this.heap[currentIndex] < this.getParent(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex))
        }
    }
    removeMin() {
        let removedValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return removedValue
    }
    heapifyDown() {
        let currentIndex = 0;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            let smallerIndex = this.getLeftChildIndex(currentIndex)
            if (this.getRightChildIndex(currentIndex) < this.heap.length && this.getRightChild(currentIndex) < this.heap[smallerIndex]) {
                smallerIndex = this.getRightChildIndex(currentIndex)
            }
            if (this.heap[currentIndex] < this.heap[smallerIndex]) {
                break;
            } else {
                this.swap(currentIndex, smallerIndex)
            }
        }
    }
}

function heapSort(arr) {
    let sorted = [];
    let heap1 = new MinHeap()
    for (let i = 0; i < arr.length; i++) {
        heap1.insert(arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
        sorted.push(heap1.removeMin())
    }
    return sorted
}

const heap = new MinHeap()
heap.insert(10)
heap.insert(4)
heap.insert(11)
heap.insert(6)
heap.removeMin()
console.log(heap)
console.log(heapSort([34,6,12,8,23,1]))