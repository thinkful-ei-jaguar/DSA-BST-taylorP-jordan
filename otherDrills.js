class BinarySearchTree {
  constructor(key=null, parent=null) {
    this.key = key,
    this.parent= parent,
    this.right = null,
    this.left= null
  }

  insert(item){
    //if tree is empty
    if(this.key === null) {
      this.key = item
    }
    else if(item<this.key){
      if(this.left === null){
        this.left = new BinarySearchTree(item, this)
      } else {
        this.left.insert(item)
      }
    }
    else if(item>this.key){
      if(this.right === null){
        this.right = new BinarySearchTree(item, this)
      } else {
        this.right.insert(item)
      }
    }
  }
}

function main() {
  let  bst = new BinarySearchTree()

  bst.insert(5)
  bst.insert(3)
  bst.insert(2)
  bst.insert(4)
}