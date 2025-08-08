// 方法1
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var minDepth = function (root) {
//   if (!root) return 0;

//   const stack = [[root, [root.val]]];
//   let result = 0;

//   while (stack.length > 0) {
//     const [node, values] = stack.pop();
//     if (!node.left && !node.right) {
//       if (result > values.length || !result) {
//         result = values.length;
//       }
//     }
//     if (node.left) {
//       stack.push([node.left, [...values, node.left.val]]);
//     }
//     if (node.right) {
//       stack.push([node.right, [...values, node.right.val]]);
//     }
//   }

//   return result;
// };

// 方法2
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  const queue = [root];
  let counter = 1;

  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) return counter;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    counter++;
  }

  return counter;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

console.log(minDepth(root));  // 2