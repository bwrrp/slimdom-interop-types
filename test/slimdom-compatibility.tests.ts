import type {
	ImmutableAttr,
	ImmutableCDATASection,
	ImmutableCharacterData,
	ImmutableComment,
	ImmutableDocument,
	ImmutableDocumentFragment,
	ImmutableDocumentType,
	ImmutableElement,
	ImmutableNode,
	ImmutableProcessingInstruction,
	ImmutableText,
} from '../src/immutable';
import type {
	MutableAttr,
	MutableCDATASection,
	MutableCharacterData,
	MutableComment,
	MutableDocument,
	MutableDocumentFragment,
	MutableDocumentType,
	MutableElement,
	MutableNode,
	MutableProcessingInstruction,
	MutableText,
} from '../src/mutable';
import type {
	ReadOnlyAttr,
	ReadOnlyCDATASection,
	ReadOnlyCharacterData,
	ReadOnlyComment,
	ReadOnlyDocument,
	ReadOnlyDocumentFragment,
	ReadOnlyDocumentType,
	ReadOnlyElement,
	ReadOnlyNode,
	ReadOnlyProcessingInstruction,
	ReadOnlyText,
} from '../src/readonly';
import type { CanAssign, Expect, ExpectNot } from './utils';

import type {
	Node,
	Attr,
	Document,
	DocumentFragment,
	DocumentType,
	Element,
	CharacterData,
	Comment,
	ProcessingInstruction,
	Text,
	CDATASection,
} from 'slimdom';

describe('slimdom compatibility', () => {
	it('can assign slimdom types to our types', () => {
		type NodeToNode = [
			Expect<CanAssign<Node, ImmutableNode>>,
			Expect<CanAssign<Node, ReadOnlyNode>>,
			Expect<CanAssign<Node, MutableNode>>
		];
		type AttrToAttr = [
			Expect<CanAssign<Attr, ImmutableAttr>>,
			Expect<CanAssign<Attr, ReadOnlyAttr>>,
			Expect<CanAssign<Attr, MutableAttr>>
		];
		type DocumentToDocument = [
			Expect<CanAssign<Document, ImmutableDocument>>,
			Expect<CanAssign<Document, ReadOnlyDocument>>,
			Expect<CanAssign<Document, MutableDocument>>
		];
		type DocumentFragmentToDocumentFragment = [
			Expect<CanAssign<DocumentFragment, ImmutableDocumentFragment>>,
			Expect<CanAssign<DocumentFragment, ReadOnlyDocumentFragment>>,
			Expect<CanAssign<DocumentFragment, MutableDocumentFragment>>
		];
		type DocumentTypeToDocumentType = [
			Expect<CanAssign<DocumentType, ImmutableDocumentType>>,
			Expect<CanAssign<DocumentType, ReadOnlyDocumentType>>,
			Expect<CanAssign<DocumentType, MutableDocumentType>>
		];
		type ElementToElement = [
			Expect<CanAssign<Element, ImmutableElement>>,
			Expect<CanAssign<Element, ReadOnlyElement>>,
			Expect<CanAssign<Element, MutableElement>>
		];
		type CharacterDataToCharacterData = [
			Expect<CanAssign<CharacterData, ImmutableCharacterData>>,
			Expect<CanAssign<CharacterData, ReadOnlyCharacterData>>,
			Expect<CanAssign<CharacterData, MutableCharacterData>>
		];
		type CommentToComment = [
			Expect<CanAssign<Comment, ImmutableComment>>,
			Expect<CanAssign<Comment, ReadOnlyComment>>,
			Expect<CanAssign<Comment, MutableComment>>
		];
		type ProcessingInstructionToProcessingInstruction = [
			Expect<CanAssign<ProcessingInstruction, ImmutableProcessingInstruction>>,
			Expect<CanAssign<ProcessingInstruction, ReadOnlyProcessingInstruction>>,
			Expect<CanAssign<ProcessingInstruction, MutableProcessingInstruction>>
		];
		type TextToText = [
			Expect<CanAssign<Text, ImmutableText>>,
			Expect<CanAssign<Text, ReadOnlyText>>,
			Expect<CanAssign<Text, MutableText>>
		];
		type CDATASectionToCDATASection = [
			Expect<CanAssign<CDATASection, ImmutableCDATASection>>,
			Expect<CanAssign<CDATASection, ReadOnlyCDATASection>>,
			Expect<CanAssign<CDATASection, MutableCDATASection>>
		];
	});
});
