
class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(childInd) {
        return parseInt((childInd - 1) / 2)
    }
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1
    }
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2
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
        this.heapifyUp()
    }
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (this.hasParent(currentIndex) && this.heap[currentIndex] < this.getParent(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex))
        }
    }
    removeMin() {
        if(this.heap.length === 0){
            return null
        }
        let removedValues = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return removedValues
    }
    heapifyDown() {
        let currentIndex = 0;
        while(this.getLeftChildIndex(currentIndex) < this.heap.length ) {
            let smallerIndex = this.getLeftChildIndex(currentIndex);
            if(this.getRightChildIndex(currentIndex) < this.heap.length && this.getRightChild(currentIndex) < this.heap[smallerIndex] ) {
                smallerIndex = this.getRightChildIndex(currentIndex);
            } 
            if (this.heap[currentIndex] < this.heap[smallerIndex]) {
                break
            } else {
                this.swap(currentIndex, smallerIndex)
            }
        }
    }
}

const minHeap = new MinHeap()
minHeap.insert(11)
minHeap.insert(4)
minHeap.insert(10)
minHeap.insert(7)
minHeap.insert(17)
console.log(minHeap.removeMin())
console.log(minHeap)