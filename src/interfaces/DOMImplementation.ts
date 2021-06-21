import { Types } from '../util/Types';

export interface DOMImplementation<TTypes extends Types> {
	createDocumentType(
		qualifiedName: string,
		publicId: string,
		systemId: string
	): TTypes['DocumentType'];
	createDocument(
		namespace: string | null,
		qualifiedName: string | null,
		doctype?: TTypes['DocumentType'] | null
	): TTypes['Document'];
	createHTMLDocument(title?: string | null): TTypes['Document'];
}
