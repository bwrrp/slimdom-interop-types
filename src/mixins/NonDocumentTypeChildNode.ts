import { Types } from '../util/Types';

export interface NonDocumentTypeChildNodeReadOnly<TTypes extends Types> {
	readonly previousElementSibling: TTypes['Element'] | null;
	readonly nextElementSibling: TTypes['Element'] | null;
}

export interface NonDocumentTypeChildNodeMutable {}
