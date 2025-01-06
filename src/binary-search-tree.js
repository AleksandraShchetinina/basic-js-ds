const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.rootNode; ;
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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
    if (this.rootNode === null) return null;
    let currentNode = this.rootNode;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    
    return currentNode.data;
  }

  max() {
    if (this.rootNode === null) return null;
    let currentNode = this.rootNode;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    
    return currentNode.data;
  }
  }


module.exports = {
  BinarySearchTree
};