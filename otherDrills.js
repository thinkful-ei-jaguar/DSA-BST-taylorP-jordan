class BinarySearchTree {
  constructor(key=null, parent=null) {
    this.key = key,
    this.parent= parent,
    this.right = null,
    this.left= null;
  }

  insert(item){
    //if tree is empty
    if(this.key === null) {
      this.key = item;
    }
    else if(item<this.key){
      if(this.left === null){
        this.left = new BinarySearchTree(item, this);
      } else {
        this.left.insert(item);
      }
    }
    else if(item>this.key){
      if(this.right === null){
        this.right = new BinarySearchTree(item, this);
      } else {
        this.right.insert(item);
      }
    }
  }

  find(item) {
    //if the item we are finding is the root node 
    if (this.key == item) {
      return this;
    }
    //if the item we are looking for is less than the root, the go to the left-hand branch
    //if there is an exisiting left child, recursively search for the item 
    else if (item < this.key && this.left) {
      return this.left.find(item);
    }
    else if (item > this.key && this.right) {
      return this.right.find(item);
    }
    else {
      throw new Error('Cannot find the item')
    }
  }

  remove(item) {
    if(this.key === item) {
      if(this.left && this.right){
        const successor = this.left._findMax();
        this.key = successor.key
        successor.remove(successor.key)
      }
      //if node has only 1 left child
      else if(this.left) {
        this._replaceWith(this.left);
      }
      else if(this.right) {
        this._replaceWith(this.right);
      }
      //if node has no children
      else {
        this._replaceWith(null);
      }
    } 
    else if (item < this.key && this.left) {
      this.left.remove(item)
    }
    else if ( item > this.key && this.right) {
      this.right.remove(item)
    }
    else {
      throw new error('Key Error')
    }
  }
}

           5
          / \
        2    6
      /  \    \
    1     4    7

function main() {
  let  bst = new BinarySearchTree();

  bst.insert(5);
  bst.insert(3);
  bst.insert(2);
  bst.insert(4);
  bst.insert(6);

  bst.find(2);
}