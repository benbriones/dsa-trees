import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  let result: number[] = [];

  function traverse(currNode: BNodeNum): void {
    if (!currNode) return;

    result.push(currNode.val);
    traverse(currNode.lnode!);
    traverse(currNode.rnode!);
  }

  traverse(node!);
  return result;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  let result: number[] = [];

  function traverse(currNode: BNodeNum): void {
    if (!currNode) return;

    traverse(currNode.lnode!);
    traverse(currNode.rnode!);
    result.push(currNode.val);
  }

  traverse(node!);
  return result;
}

export { preOrder, postOrder };