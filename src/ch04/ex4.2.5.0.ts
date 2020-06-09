type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true;
};

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

const a: TreeNode = { value: 'a' };
const b: LeafNode = { value: 'b', isLeaf: true };
const c: InnerNode = { value: 'c', children: [b] };

const cloneA = mapNode(a, _ => _.toUpperCase());
const cloneB = mapNode(b, _ => _.toUpperCase());
const cloneC = mapNode(c, _ => _.toUpperCase());

// function mapNode(node: TreeNode, f: (value: string) => string): TreeNode {
//   return {
//     ...node,
//     value: f(node.value),
//   };
// }

// type MapNode = <T>(node: T, f: (value: string) => string) => T;

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  };
}

console.log(cloneA.value);
console.log(cloneB.isLeaf);
console.log(cloneC.children);

const cloneD = mapNode({ value: 'd', what: 'cool' }, _ => _.toUpperCase());
const cloneE = mapNode(({ what: 'sooo' }, _ => _.toUpperCase());
console.log(cloneD.what);
console.log(cloneE);

export {};
