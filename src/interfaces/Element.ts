import { Types } from '../util/Types';
import { NodeListOrArray } from './NodeListOrArray';

export interface ElementImmutable {
	readonly namespaceURI: string;
	readonly prefix: string | null;
	readonly localName: string;
	readonly tagName: string;
}

export interface ElementReadOnly<TTypes extends Types> {
	readonly attributes: NodeListOrArray<TTypes['Attr']>;

	hasAttributes(): boolean;
	getAttribute(qualifiedName: string): string | null;
	getAttributeNS(namespace: string | null, localName: string): string | null;
	hasAttribute(qualifiedName: string): boolean;
	hasAttributeNS(namespace: string | null, localName: string): boolean;
	getAttributeNode(qualifiedName: string): TTypes['Attr'] | null;
	getAttributeNodeNS(namespace: string | null, localName: string): TTypes['Attr'] | null;

	// TODO: not yet released in slimdom
	// getElementsByTagName(qualifiedName: string): NodeListOrArray<TTypes['Element']>;
	// getElementsByTagNameNS(
	// 	namespace: string | null,
	// 	localName: string
	// ): NodeListOrArray<TTypes['Element']>;

	get innerHTML(): string;
	get outerHTML(): string;
}

export interface ElementMutable<TTypes extends Types> {
	setAttribute(qualifiedName: string, value: string): void;
	setAttributeNS(namespace: string | null, localName: string, value: string): void;
	removeAttribute(qualifiedName: string): void;
	removeAttributeNS(namespace: string | null, localName: string): void;
	toggleAttribute(qualifiedName: string, force?: boolean): boolean;
	setAttributeNode(attr: TTypes['Attr']): TTypes['Attr'] | null;
	setAttributeNodeNS(attr: TTypes['Attr']): TTypes['Attr'] | null;
	removeAttributeNode(attr: TTypes['Attr']): TTypes['Attr'];
}
