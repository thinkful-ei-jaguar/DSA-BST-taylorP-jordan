const BST = require('./BST_class');
const bst = new BST();

//Drill #5 
// function heightBST(tree){
//   console.log('firing!');
//   //if the tree is null, return 0 <- base case 
//   let counterL = 0;
//   let counterR = 0;

//   //left counter - derive from the root's left 
//   //add to the counter if there is a child 
//   //if there isnt a child 
//   if(tree.left && tree.right) {
//     counterL++;
//     counterR++;
//     return heightBST(tree.left) > heightBST(tree.right) ? heightBST(tree.left) : heightBST(tree.right);
//   }
//   else if (tree.left) {
//     counterL++;
//     console.log(counterL);
//     return heightBST(tree.left);
//   } else if (tree.right) {
//     counterR++;
//     return heightBST(tree.right);
//   }

//   if(!tree.left && !tree.right) {
//     return 0;
//   }

//   let result = counterL >= counterR ? counterL : counterR;
//   console.log(result, 'result from height function');
// }

// heightBST(bst);

function bstHeight(tree) {
  // console.log(tree.key, 'tree.key');
  // console.log(tree.parent, 'tree.parent');
  // console.log(tree.left.key, 'tree left');
  // console.log(tree.right.key, 'tree right');

  let counter = 1;
  // if(tree.left){
  //   counter++;
  //   bstHeight(tree.left);
  // }
  if(tree.left == null ) {
    return 0;
  }
  counter++;
  return bstHeight(tree.left) + counter;

}

//input -> bst      output -> 3
//        5
//       / \
//     3    6
//   /  \    
// 2     4 

function main() {
  bst.insert(5);
  bst.insert(6);
  bst.insert(3);
  bst.insert(4);
  bst.insert(2);

  bstHeight(bst);
  // return bst;
}

console.log(main());