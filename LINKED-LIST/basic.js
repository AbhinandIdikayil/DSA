
class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value == value) {
            this.unShift()
        } else {
            let current = this.head.next
            let previous = null
            while (current.value != value && current.next) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
    }

    unShift() {
        if (this.isEmpty()) {
            return null
        } else {
            this.head = this.head.next
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null
        } else {
            let current = this.head
            let previous = null
            while (current.next) {
                previous = current
                current = current.next
            }
            previous.next = null
            this.size--
        }
    }

    removeMiddle() {
        if(this.isEmpty()){
            return null
        } else {
            let previous = null;
            let fast = this.head
            let slow = this.head
            while(fast && fast.next) {
                previous = slow;
                slow = slow.next
                fast = fast.next.next
            }
            previous.next = slow.next
        }
        this.size--
    }

    reverse() {
        if (this.isEmpty()) {
            return null
        } else {
            let previous = null
            let current = this.head
            while(current) {
                let next = current.next
                current.next = previous
                previous = current
                current = next
            }
            this.head = previous
        }
    }

    display() {
        let values = ''
        let current = this.head
        while (current) {
            values += current.value + ' '
            current = current.next
        }
        console.log(values)
    }
}

let list = new List()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.removeMiddle()
list.display()