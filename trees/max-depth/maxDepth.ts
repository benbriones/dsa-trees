import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  let numChildren = 0;
  for (const child of node!.children) {
    const childValue = maxDepth(child);
    if (childValue > numChildren) {
      numChildren = childValue;
    }
  }
  return numChildren + 1;
}

export { maxDepth };
