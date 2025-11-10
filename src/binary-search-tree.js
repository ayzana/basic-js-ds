const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addNodeTree(this.root, data);
    function addNodeTree(nodeTree, data) {
      if (!nodeTree) {
        return new Node(data);
      }
      if (nodeTree.data === data) {
        return nodeTree;
      }

      if (data < nodeTree.data) {
        nodeTree.left = addNodeTree(nodeTree.left, data);
      } else {
        nodeTree.right = addNodeTree(nodeTree.right, data);
      }
      return nodeTree;
    }
  }

  find(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  has(data) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }
}

module.exports = {
  BinarySearchTree,
};
