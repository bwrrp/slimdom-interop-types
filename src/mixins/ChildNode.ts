import { Types } from '../util/Types';

export interface ChildNodeReadOnly {}

export interface ChildNodeMutable<TTypes extends Types> {
	before(...nodes: (TTypes['Node'] | string)[]): void;
	after(...nodes: (TTypes['Node'] | string)[]): void;
	replaceWith(...nodes: (TTypes['Node'] | string)[]): void;
	remove(): void;
}
