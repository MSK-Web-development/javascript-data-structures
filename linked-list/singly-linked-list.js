export default function LinkedList() {
  this.length = 0;
  this.head = null;

  function Node(element) {
    this.data = element;
    this.next = null;
  }

  this.add = function (element) {
    let node = new Node(element);

    if (!this.length) {
      this.head = node;
      this.length++;

      return;
    }
    let currentNode = this.head;
    let len = this.length;

    while (len - 1) {
      currentNode = currentNode.next;
      len--;
    }

    currentNode.next = node;
    this.length++;
  };

  this.display = function () {
    let len = this.length;
    let currentNode = this.head;
    while (len) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
      len--;
    }
  };

  this.insert = function (element, index) {
    if (index < 0 || index > this.length) {
      console.log("invalid index");
      return;
    }

    let node = new Node(element);

    if (index === 1) {
      node.next = this.head;
      this.head = node;
    }

    let currentNode = this.head;
    while (index - 2) {
      currentNode = currentNode.next;
      index--;
    }

    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
  };

  this.removeElementAtIndex = function (index) {
    if (index < 0 || index > this.length) {
      console.log("invalid index");
      return;
    }

    if (index === 1) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    while (index - 1) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      index--;
    }

    prevNode.next = currentNode.next;
    this.length--;
  };

  this.removeElementFirstOccurance = function (element) {
    let currentNode = this.head;

    let len = this.length;
    while (len) {
      if (currentNode.data === element) {
        this.removeElementAtIndex(this.length - (len - 1));
        break;
      }
      currentNode = currentNode.next;
      len--;
    }
  };
}
