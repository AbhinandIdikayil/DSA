
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertHelper(node, this.root)
        }
    }
    insertHelper(node, root) {
        if (root == null) {
            return null;
        }
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertHelper(node, root.left)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertHelper(node, root.right)
            }
        }
    }
    preOrder() {
        const helper = (node, pos) => {
            if (node == null) {
                return null
            }
            console.log(pos, node.value);
            helper(node.left, `left node of ${node.value} is:`)
            helper(node.right, `right node of ${node.value} is:`)
        }
        helper(this.root, 'root is')
    }
    postOrder() {
        const helper = (node,pos) => {
            if(node == null){
                return null
            }
            helper(node.left,`left node of ${node.value} is:`)
            helper(node.right,`right node of ${node.value} is:`)
            console.log(pos || 'root is',node.value)
        }
        helper(this.root)
    }
    inOrder() {
        const helper = (node,pos) => {
            if(node == null){
                return null;
            }
            helper(node.left,`left node of ${node.value}  is:`)
            console.log(pos || 'root is',node.value)
            helper(node.right,`right node of ${node.value} is:`)
        }
        helper(this.root)
    }
}
const tree = new Tree()
tree.insert(10)
tree.insert(30)
tree.insert(7)
tree.insert(67)
tree.inOrder()