
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null;
    }
    isEmpty() {
        return this.front == null
    }
    enqueue(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.front = this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            let removedNode = this.front
            this.front = this.front.next
            if (this.front == null) {
                this.rear = null;
            }
            return removedNode
        }
    }
    print() {
        let values = ''
        let current = this.front
        while (current) {
            values += current.value + ' ';
            current = current.next
        }
        console.log(values)
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
queue.print()