import { Types } from '../util/Types';

export interface ChildNodeReadOnly {}

export interface ChildNodeMutable<TTypes extends Types> {
	// TODO: before(...nodes: (TTypes['Node'] | string)[]): void;
	// TODO: after(...nodes: (TTypes['Node'] | string)[]): void;
	// TODO: replaceWith(...nodes: (TTypes['Node'] | string)[]): void;
	remove(): void;
}
