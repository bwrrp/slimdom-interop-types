import { Types } from '../util/Types';

export interface AttrImmutable {
	readonly namespaceURI: string | null;
	readonly prefix: string | null;
	readonly localName: string;
	readonly name: string;
}

export interface AttrReadOnly<TTypes extends Types> {
	readonly ownerElement: TTypes['Element'] | null;

	get value(): string;
}

export interface AttrMutable {
	set value(value: string);
}
