const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor()
  {
     this.rootel = null;
  }
  root() {
    if (!this.rootel)
    { return null;}

    return this.rootel;

  }

  add(data) {
    this.rootel = addData(this.rootel, data);
    function addData(node, data){
      if (!node){
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (data < node.data){
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
}

  has( data) {
    return hasData(this.rootel, data);
    function hasData(node, data){
      if (!node){
        return false;
      }
      if (node.data == data){
        return true;
      }
      return data < node.data ? hasData(node.left, data):hasData(node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};