
class MinHeap {
    constructor() {
        this.heap = [];
    }
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1
    }
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2
    }
    getParentIndex(childIndex) {
        return parseInt((childIndex - 1) / 2)
    }
    getLeftChild(index) {
        return this.heap[this.getLeftChildIndex(index)]
    }
    getRightChild(index) {
        return this.heap[this.getRightChildIndex(index)]
    }
    getParent(index) {
        return this.heap[this.getParentIndex(index)]
    }
    hasLeftChild(index) {
        return this.heap[this.getLeftChildIndex(index)] < this.heap.length
    }
    hasRightChild(index) {
        return this.heap[this.getRightChildIndex(index)] < this.heap.length
    }
    hasParent(index) {
        return this.heap[this.getParentIndex(index)] >= 0
    }
    swap(ind1, ind2) {
        [this.heap[ind1], this.heap[ind2]] = [
            this.heap[ind2],
            this.heap[ind1]
        ]
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp();
    }
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        console.log(this.getParentIndex(currentIndex),this.getParent(currentIndex))
        while (
            this.hasParent(currentIndex) && // 0
            this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
        ) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        };
    }
}
const heap = new MinHeap()
heap.insert(11)
heap.insert(4)
heap.insert(10)
heap.insert(7)
console.log(heap)