export interface NodeListOrArray<TNode> {
	[Symbol.iterator](): IterableIterator<TNode>;

	[index: number]: TNode;
	readonly length: number;
}
