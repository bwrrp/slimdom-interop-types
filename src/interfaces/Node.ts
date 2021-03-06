import { Types } from '../util/Types';
import { NodeListOrArray } from './NodeListOrArray';

export interface NodeImmutable {
	ELEMENT_NODE: number;
	ATTRIBUTE_NODE: number;
	TEXT_NODE: number;
	CDATA_SECTION_NODE: number;
	ENTITY_REFERENCE_NODE: number;
	ENTITY_NODE: number;
	PROCESSING_INSTRUCTION_NODE: number;
	COMMENT_NODE: number;
	DOCUMENT_NODE: number;
	DOCUMENT_TYPE_NODE: number;
	DOCUMENT_FRAGMENT_NODE: number;
	NOTATION_NODE: number;

	nodeType: number;
	nodeName: string;
}

export interface NodeReadOnly<TTypes extends Types> {
	readonly ownerDocument: TTypes['Document'] | null;
	readonly parentNode: TTypes['Node'] | null;
	readonly parentElement: TTypes['Element'] | null;
	readonly childNodes: NodeListOrArray<TTypes['Node']>;
	readonly firstChild: TTypes['Node'] | null;
	readonly lastChild: TTypes['Node'] | null;
	readonly previousSibling: TTypes['Node'] | null;
	readonly nextSibling: TTypes['Node'] | null;

	get nodeValue(): string | null;
	get textContent(): string | null;

	hasChildNodes(): boolean;
	contains(other: TTypes['Node'] | null): boolean;

	cloneNode(deep?: boolean): this;

	lookupPrefix(namespace: string | null): string | null;
	lookupNamespaceURI(prefix: string | null): string | null;
	isDefaultNamespace(namespace: string | null): boolean;
}

export interface NodeMutable<TTypes extends Types> {
	set nodeValue(value: string | null);
	set textContent(value: string | null);

	insertBefore(node: TTypes['Node'], child: TTypes['Node']): TTypes['Node'];
	appendChild(node: TTypes['Node']): TTypes['Node'];
	replaceChild(node: TTypes['Node'], child: TTypes['Node']): TTypes['Node'];
	removeChild(child: TTypes['Node']): TTypes['Node'];

	normalize(): void;
}
