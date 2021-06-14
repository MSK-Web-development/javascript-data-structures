// Binary search tree

let Queue = require("../queue/left-to-right");

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BST() {
  let root = null;

  // Helper methods
  let findNodeHeight = (node) => {
    return (function findHeight(node) {
      if (!node) {
        return -1;
      } else {
        return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
      }
    })(node);
  };

  return {
    getRoot: () => {
      return root;
    },
    add: (data) => {
      const node = new Node(data);
      if (!root) {
        root = node;
        return;
      }

      (function insert(node) {
        if (data < node.data) {
          if (!node.left) {
            node.left = new Node(data);
            return;
          } else {
            insert(node.left);
          }
        } else {
          if (!node.right) {
            node.right = new Node(data);
            return;
          } else {
            insert(node.right);
          }
        }
      })(root);
    },
    findMin: () => {
      let currentNode = root;
      while (currentNode.left) {
        currentNode = currentNode.left;
      }
      return currentNode.data;
    },
    findMax: () => {
      let currentNode = root;
      while (currentNode.right) {
        currentNode = currentNode.right;
      }
      return currentNode.data;
    },
    findTreeHeight: () => {
      return findNodeHeight(root);
    },
    findMaximumDepth: () => {
      //? Note:  Max depth is the tree height
      return findTreeHeightFn();
    },
    findMinimumDepth: () => {
      return (function findMinDepth(node) {
        if (!node) {
          return 0;
        }
        if (!node.left && !node.right) {
          return 1;
        }
        if (!node.left) {
          return findMinDepth(node.right) + 1;
        }
        if (!node.right) {
          return findMinDepth(node.left) + 1;
        }

        return Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1;
      })(root);
    },
    postOrderTraverse: () => {
      (function traverse(node) {
        if (node) {
          traverse(node.left);
          traverse(node.right);
          console.log(node.data);
        }
      })(root);
    },
    inOrderTraverse: () => {
      (function traverse(node) {
        if (node) {
          traverse(node.left);
          console.log(node.data);
          traverse(node.right);
        }
      })(root);
    },
    preOrderTraverse: () => {
      (function traverse(node) {
        if (node) {
          console.log(node.data);
          traverse(node.left);
          traverse(node.right);
        }
      })(root);
    },
    levelOrderTraverse: () => {
      let printItems = "";

      let queue = new Queue();
      let currentNode = root;

      while (currentNode.data) {
        printItems += `${currentNode.data} `;
        if (currentNode.left) queue.enqueue(currentNode.left);
        if (currentNode.right) queue.enqueue(currentNode.right);
        currentNode = queue.dequeue();
      }

      return printItems;
    },
  };
}

module.exports = BST;
