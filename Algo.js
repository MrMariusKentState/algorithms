
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  addToEnd(data) {
    let runner = this.head;
    while (runner.next !== null) {
      runner = runner.next;
    }
    runner.next = new Node(data);

    return this;
  }
}

ll = new LinkedList(1);
ll.addToEnd(9).addToEnd(11).addToEnd("Hello world!");

console.log(ll.head);
