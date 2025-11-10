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
    return hasNodeTree(this.root, data);
    function hasNodeTree(nodeTree, data) {
      if (!nodeTree) {
        return false;
      }
      if (nodeTree.data === data) {
        return true;
      }
      if (nodeTree.data > data) {
        return hasNodeTree(nodeTree.left, data);
      } else {
        return hasNodeTree(nodeTree.right, data);
      }
    }
  }

  remove(data) {
    this.root = removeNodeTree(this.root, data);
    function removeNodeTree(nodeTree, data) {
      if (!nodeTree) {
        return null;
      }
      if (nodeTree.data < data) {
        nodeTree.right = removeNodeTree(nodeTree.right, data);
        return nodeTree;
      } else if (nodeTree.data > data) {
        nodeTree.left = removeNodeTree(nodeTree.left, data);
        return nodeTree;
      } else {
        if (!nodeTree.right) {
          nodeTree = nodeTree.left;
          return nodeTree;
        }
        if (!nodeTree.left) {
          nodeTree = nodeTree.right;
          return nodeTree;
        }
        let minNodeRight = nodeTree.right;
        while (minNodeRight.left) {
          minNodeRight = minNodeRight.left;
        }
        nodeTree.data = minNodeRight.data;
        nodeTree.right = removeNodeTree(nodeTree.right, minNodeRight.data);
        return nodeTree;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.root) {
      return;
    }
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
