
class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }

    removeFront() {
        if(!this.head) {
            return this.head;
        }
        
        var removedNode = this.head; // Have a variable hold the node we'll remove
        this.head = removedNode.next; // Moves the head of the list to the 2nd node, which will become the new head when we're done
        removedNode.next = null;
        return this.head;
    }

    front() {
        if(!this.head) {
            return this.head;
        }

        else {
            console.log(this.head.data)
            return this.head.data
        }
    }


}


let sll1 = new LinkedList();
let sll2 = new LinkedList();
sll1.addFront(9).addFront(17)
sll2.addFront(9).addFront(17).addFront("Hello!").addFront(81).addFront("In a van down by the river!")
console.log(sll1)
console.log(sll2)

sll1.front();
sll2.front();

sll2.removeFront();
console.log(sll2)