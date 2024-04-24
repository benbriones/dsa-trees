import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {

  let count = 0;
  if (node.val % 2 === 0) {
    count++;
  }

  for (const child of node.children) {
    count += countEvens(child);
  }

  return count;
}

export { countEvens };
