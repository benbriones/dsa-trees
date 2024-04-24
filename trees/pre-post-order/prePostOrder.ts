import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) {
    return [];
  }
  const values = [node.val];
  for (const child of node!.children) {
    values.push(...preOrder(child));
  }
  return values;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) {
    return [];
  }
  const values = [];
  for (const child of node!.children) {
    values.push(...postOrder(child));
  }
  values.push(node.val);
  return values;
}

export { preOrder, postOrder };
