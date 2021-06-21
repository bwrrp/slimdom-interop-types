import { NodeListOrArray } from '../interfaces/NodeListOrArray';
import { Types } from '../util/Types';

export interface ParentNodeReadOnly<TTypes extends Types> {
	readonly children: NodeListOrArray<TTypes['Element']>;

	readonly firstElementChild: TTypes['Element'] | null;
	readonly lastElementChild: TTypes['Element'] | null;
	readonly childElementCount: number;
}

export interface ParentNodeMutable<TTypes extends Types> {
	prepend(...nodes: (TTypes['Node'] | string)[]): void;
	append(...nodes: (TTypes['Node'] | string)[]): void;
	// TODO: not yet released in slimdom
	// replaceChildren(...nodes: (TTypes['Node'] | string)[]): void;
}
