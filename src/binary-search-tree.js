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
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data)
      node.left === null
        ? (node.left = newNode)
        : this.addNode(node.left, newNode);
    else
      node.right === null
        ? (node.right = newNode)
        : this.addNode(node.right, newNode);
  }
  find(data) {
    return this.findNode(data);
  }

  findNode(data) {
    let current = this.root;
    while (current !== null) {
      if (data === current.data) return current;
      else if (data < current.data) current = current.left;
      else current = current.right;
    }
    return null;
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
