import type { DOMImplementation } from './DOMImplementation';
import { Types } from '../util/Types';
import { NodeListOrArray } from './NodeListOrArray';

export interface DocumentImmutable {}

export interface DocumentReadOnly<TTypes extends Types> {
	readonly implementation: DOMImplementation<TTypes>;
	readonly doctype: TTypes['DocumentType'] | null;
	readonly documentElement: TTypes['Element'] | null;

	// TODO: not yet released in slimdom
	// getElementsByTagName(qualifiedName: string): NodeListOrArray<TTypes['Element']>;
	// getElementsByTagNameNS(
	// 	namespace: string | null,
	// 	localName: string
	// ): NodeListOrArray<TTypes['Element']>;

	importNode(node: TTypes['Node'], deep?: boolean): TTypes['Node'];
}

export interface DocumentMutable<TTypes extends Types> {
	createAttribute(localName: string): TTypes['Attr'];
	createAttributeNS(namespace: string | null, qualifiedName: string): TTypes['Attr'];
	createElement(localName: string): TTypes['Element'];
	createElementNS(namespace: string | null, qualifiedName: string): TTypes['Element'];
	createDocumentFragment(): TTypes['DocumentFragment'];
	createTextNode(data: string): TTypes['Text'];
	createCDATASection(data: string): TTypes['CDATASection'];
	createComment(data: string): TTypes['Comment'];
	createProcessingInstruction(target: string, data: string): TTypes['ProcessingInstruction'];

	adoptNode(node: TTypes['Node']): TTypes['Node'];
}
