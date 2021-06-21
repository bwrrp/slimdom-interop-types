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

describe('internal compatibility', () => {
	it('can assign types to a less mutable version', () => {
		type MutableToReadOnly = [
			Expect<CanAssign<MutableNode, ReadOnlyNode>>,
			Expect<CanAssign<MutableAttr, ReadOnlyAttr>>,
			Expect<CanAssign<MutableDocument, ReadOnlyDocument>>,
			Expect<CanAssign<MutableDocumentFragment, ReadOnlyDocumentFragment>>,
			Expect<CanAssign<MutableDocumentType, ReadOnlyDocumentType>>,
			Expect<CanAssign<MutableElement, ReadOnlyElement>>,
			Expect<CanAssign<MutableCharacterData, ReadOnlyCharacterData>>,
			Expect<CanAssign<MutableComment, ReadOnlyComment>>,
			Expect<CanAssign<MutableProcessingInstruction, ReadOnlyProcessingInstruction>>,
			Expect<CanAssign<MutableText, ReadOnlyText>>,
			Expect<CanAssign<MutableCDATASection, ReadOnlyCDATASection>>
		];
		type MutableToImmutable = [
			Expect<CanAssign<MutableNode, ImmutableNode>>,
			Expect<CanAssign<MutableAttr, ImmutableAttr>>,
			Expect<CanAssign<MutableDocument, ImmutableDocument>>,
			Expect<CanAssign<MutableDocumentFragment, ImmutableDocumentFragment>>,
			Expect<CanAssign<MutableDocumentType, ImmutableDocumentType>>,
			Expect<CanAssign<MutableElement, ImmutableElement>>,
			Expect<CanAssign<MutableCharacterData, ImmutableCharacterData>>,
			Expect<CanAssign<MutableComment, ImmutableComment>>,
			Expect<CanAssign<MutableProcessingInstruction, ImmutableProcessingInstruction>>,
			Expect<CanAssign<MutableText, ImmutableText>>,
			Expect<CanAssign<MutableCDATASection, ImmutableCDATASection>>
		];
		type ReadOnlyToImmutable = [
			Expect<CanAssign<ReadOnlyNode, ImmutableNode>>,
			Expect<CanAssign<ReadOnlyAttr, ImmutableAttr>>,
			Expect<CanAssign<ReadOnlyDocument, ImmutableDocument>>,
			Expect<CanAssign<ReadOnlyDocumentFragment, ImmutableDocumentFragment>>,
			Expect<CanAssign<ReadOnlyDocumentType, ImmutableDocumentType>>,
			Expect<CanAssign<ReadOnlyElement, ImmutableElement>>,
			Expect<CanAssign<ReadOnlyCharacterData, ImmutableCharacterData>>,
			Expect<CanAssign<ReadOnlyComment, ImmutableComment>>,
			Expect<CanAssign<ReadOnlyProcessingInstruction, ImmutableProcessingInstruction>>,
			Expect<CanAssign<ReadOnlyText, ImmutableText>>,
			Expect<CanAssign<ReadOnlyCDATASection, ImmutableCDATASection>>
		];
	});
	it('can not assign types to a more mutable version', () => {
		type ReadOnlyToMutable = [
			ExpectNot<CanAssign<ReadOnlyNode, MutableNode>>,
			ExpectNot<CanAssign<ReadOnlyAttr, MutableAttr>>,
			ExpectNot<CanAssign<ReadOnlyDocument, MutableDocument>>,
			ExpectNot<CanAssign<ReadOnlyDocumentFragment, MutableDocumentFragment>>,
			ExpectNot<CanAssign<ReadOnlyDocumentType, MutableDocumentType>>,
			ExpectNot<CanAssign<ReadOnlyElement, MutableElement>>,
			ExpectNot<CanAssign<ReadOnlyCharacterData, MutableCharacterData>>,
			ExpectNot<CanAssign<ReadOnlyComment, MutableComment>>,
			ExpectNot<CanAssign<ReadOnlyProcessingInstruction, MutableProcessingInstruction>>,
			ExpectNot<CanAssign<ReadOnlyText, MutableText>>,
			ExpectNot<CanAssign<ReadOnlyCDATASection, MutableCDATASection>>
		];
		type ImutableToMutable = [
			ExpectNot<CanAssign<ImmutableNode, MutableNode>>,
			ExpectNot<CanAssign<ImmutableAttr, MutableAttr>>,
			ExpectNot<CanAssign<ImmutableDocument, MutableDocument>>,
			ExpectNot<CanAssign<ImmutableDocumentFragment, MutableDocumentFragment>>,
			ExpectNot<CanAssign<ImmutableDocumentType, MutableDocumentType>>,
			ExpectNot<CanAssign<ImmutableElement, MutableElement>>,
			ExpectNot<CanAssign<ImmutableCharacterData, MutableCharacterData>>,
			ExpectNot<CanAssign<ImmutableComment, MutableComment>>,
			ExpectNot<CanAssign<ImmutableProcessingInstruction, MutableProcessingInstruction>>,
			ExpectNot<CanAssign<ImmutableText, MutableText>>,
			ExpectNot<CanAssign<ImmutableCDATASection, MutableCDATASection>>
		];
		type ImmutableToReadOnly = [
			ExpectNot<CanAssign<ImmutableNode, ReadOnlyNode>>,
			ExpectNot<CanAssign<ImmutableAttr, ReadOnlyAttr>>,
			ExpectNot<CanAssign<ImmutableDocument, ReadOnlyDocument>>,
			ExpectNot<CanAssign<ImmutableDocumentFragment, ReadOnlyDocumentFragment>>,
			ExpectNot<CanAssign<ImmutableDocumentType, ReadOnlyDocumentType>>,
			ExpectNot<CanAssign<ImmutableElement, ReadOnlyElement>>,
			ExpectNot<CanAssign<ImmutableCharacterData, ReadOnlyCharacterData>>,
			ExpectNot<CanAssign<ImmutableComment, ReadOnlyComment>>,
			ExpectNot<CanAssign<ImmutableProcessingInstruction, ReadOnlyProcessingInstruction>>,
			ExpectNot<CanAssign<ImmutableText, ReadOnlyText>>,
			ExpectNot<CanAssign<ImmutableCDATASection, ReadOnlyCDATASection>>
		];
	});

	it('can assign types to a base type according to inheritance', () => {
		type AttrToNode = [
			Expect<CanAssign<MutableAttr, MutableNode>>,
			Expect<CanAssign<ReadOnlyAttr, ReadOnlyNode>>,
			Expect<CanAssign<ImmutableAttr, ImmutableNode>>
		];
		type DocumentToNode = [
			Expect<CanAssign<MutableDocument, MutableNode>>,
			Expect<CanAssign<ReadOnlyDocument, ReadOnlyNode>>,
			Expect<CanAssign<ImmutableDocument, ImmutableNode>>
		];
		type DocumentFragmentToNode = [
			Expect<CanAssign<MutableDocumentFragment, MutableNode>>,
			Expect<CanAssign<ReadOnlyDocumentFragment, ReadOnlyNode>>,
			Expect<CanAssign<ImmutableDocumentFragment, ImmutableNode>>
		];
		type DocumentTypeToNode = [
			Expect<CanAssign<MutableDocumentType, MutableNode>>,
			Expect<CanAssign<ReadOnlyDocumentType, ReadOnlyNode>>,
			Expect<CanAssign<ImmutableDocumentType, ImmutableNode>>
		];
		type ElementToNode = [
			Expect<CanAssign<MutableElement, MutableNode>>,
			Expect<CanAssign<ReadOnlyElement, ReadOnlyNode>>,
			Expect<CanAssign<ImmutableElement, ImmutableNode>>
		];
		type CharacterDataToNode = [
			Expect<CanAssign<MutableCharacterData, MutableNode>>,
			Expect<CanAssign<ReadOnlyCharacterData, ReadOnlyNode>>,
			Expect<CanAssign<ImmutableCharacterData, ImmutableNode>>
		];
		type CommentToCharacterData = [
			Expect<CanAssign<MutableComment, MutableCharacterData>>,
			Expect<CanAssign<ReadOnlyComment, ReadOnlyCharacterData>>,
			Expect<CanAssign<ImmutableComment, ImmutableCharacterData>>
		];
		type ProcessingInstructionToCharacterData = [
			Expect<CanAssign<MutableProcessingInstruction, MutableCharacterData>>,
			Expect<CanAssign<ReadOnlyProcessingInstruction, ReadOnlyCharacterData>>,
			Expect<CanAssign<ImmutableProcessingInstruction, ImmutableCharacterData>>
		];
		type TextToCharacterData = [
			Expect<CanAssign<MutableText, MutableCharacterData>>,
			Expect<CanAssign<ReadOnlyText, ReadOnlyCharacterData>>,
			Expect<CanAssign<ImmutableText, ImmutableCharacterData>>
		];
		type CDATASectionToText = [
			Expect<CanAssign<MutableCDATASection, MutableText>>,
			Expect<CanAssign<ReadOnlyCDATASection, ReadOnlyText>>,
			Expect<CanAssign<ImmutableCDATASection, ImmutableText>>
		];
	});

	it('can not assign types to a subtype according to inheritance', () => {
		type NodeToAttr = [
			ExpectNot<CanAssign<MutableNode, MutableAttr>>,
			ExpectNot<CanAssign<ReadOnlyNode, ReadOnlyAttr>>,
			ExpectNot<CanAssign<ImmutableNode, ImmutableAttr>>
		];
		type NodeToDocument = [
			ExpectNot<CanAssign<MutableNode, MutableDocument>>,
			ExpectNot<CanAssign<ReadOnlyNode, ReadOnlyDocument>>,
			// TODO: Allowed because types have the same shape
			Expect<CanAssign<ImmutableNode, ImmutableDocument>>
		];
		type NodeToDocumentFragment = [
			ExpectNot<CanAssign<MutableNode, MutableDocumentFragment>>,
			ExpectNot<CanAssign<ReadOnlyNode, ReadOnlyDocumentFragment>>,
			// TODO: Allowed because types have the same shape
			Expect<CanAssign<ImmutableNode, ImmutableDocumentFragment>>
		];
		type NodeToDocumentType = [
			ExpectNot<CanAssign<MutableNode, MutableDocumentType>>,
			ExpectNot<CanAssign<ReadOnlyNode, ReadOnlyDocumentType>>,
			ExpectNot<CanAssign<ImmutableNode, ImmutableDocumentType>>
		];
		type NodeToElement = [
			ExpectNot<CanAssign<MutableNode, MutableElement>>,
			ExpectNot<CanAssign<ReadOnlyNode, ReadOnlyElement>>,
			ExpectNot<CanAssign<ImmutableNode, ImmutableElement>>
		];
		type NodeToCharacterData = [
			ExpectNot<CanAssign<MutableNode, MutableCharacterData>>,
			ExpectNot<CanAssign<ReadOnlyNode, ReadOnlyCharacterData>>,
			// TODO: Allowed because types have the same shape
			Expect<CanAssign<ImmutableNode, ImmutableCharacterData>>
		];
		type CharacterDataToComment = [
			// TODO: Allowed because types have the same shape
			Expect<CanAssign<MutableCharacterData, MutableComment>>,
			Expect<CanAssign<ReadOnlyCharacterData, ReadOnlyComment>>,
			Expect<CanAssign<ImmutableCharacterData, ImmutableComment>>
		];
		type CharacterDataToProcessingInstruction = [
			ExpectNot<CanAssign<MutableCharacterData, MutableProcessingInstruction>>,
			ExpectNot<CanAssign<ReadOnlyCharacterData, ReadOnlyProcessingInstruction>>,
			ExpectNot<CanAssign<ImmutableCharacterData, ImmutableProcessingInstruction>>
		];
		type CharacterDataToText = [
			ExpectNot<CanAssign<MutableCharacterData, MutableText>>,
			ExpectNot<CanAssign<ReadOnlyCharacterData, ReadOnlyText>>,
			// TODO: Allowed because types have the same shape
			Expect<CanAssign<ImmutableCharacterData, ImmutableText>>
		];
		type TextToCDATASection = [
			// TODO: Allowed because types have the same shape
			Expect<CanAssign<MutableText, MutableCDATASection>>,
			Expect<CanAssign<ReadOnlyText, ReadOnlyCDATASection>>,
			Expect<CanAssign<ImmutableText, ImmutableCDATASection>>
		];
	});
});
