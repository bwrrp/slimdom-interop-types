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
} from './immutable';

import type { AttrReadOnly } from './interfaces/Attr';
import type { CDATASectionReadOnly } from './interfaces/CDATASection';
import type { CharacterDataReadOnly } from './interfaces/CharacterData';
import type { CommentReadOnly } from './interfaces/Comment';
import type { DocumentFragmentReadOnly } from './interfaces/DocumentFragment';
import type { DocumentReadOnly } from './interfaces/Document';
import type { DocumentTypeReadOnly } from './interfaces/DocumentType';
import type { ElementReadOnly } from './interfaces/Element';
import type { NodeReadOnly } from './interfaces/Node';
import type { ProcessingInstructionReadOnly } from './interfaces/ProcessingInstruction';
import type { TextReadOnly } from './interfaces/Text';

import type { ChildNodeReadOnly } from './mixins/ChildNode';
import type { NonDocumentTypeChildNodeReadOnly } from './mixins/NonDocumentTypeChildNode';
import type { NonElementParentNodeReadOnly } from './mixins/NonElementParentNode';
import { SpecificTypes } from './util/Types';
import type { ParentNodeReadOnly } from './mixins/ParentNode';

type ReadOnlyTypes = SpecificTypes<
	ReadOnlyNode,
	ReadOnlyAttr,
	ReadOnlyDocument,
	ReadOnlyDocumentFragment,
	ReadOnlyDocumentType,
	ReadOnlyElement,
	ReadOnlyCharacterData,
	ReadOnlyComment,
	ReadOnlyProcessingInstruction,
	ReadOnlyText,
	ReadOnlyCDATASection
>;

export type ReadOnlyNode<TTypes extends ReadOnlyTypes = ReadOnlyTypes> = ImmutableNode &
	NodeReadOnly<TTypes>;

export type ReadOnlyAttr<TTypes extends ReadOnlyTypes = ReadOnlyTypes> = ImmutableAttr &
	ReadOnlyNode &
	AttrReadOnly<TTypes>;
export type ReadOnlyDocument<TTypes extends ReadOnlyTypes = ReadOnlyTypes> = ImmutableDocument &
	ReadOnlyNode<TTypes> &
	NonElementParentNodeReadOnly &
	ParentNodeReadOnly<TTypes> &
	DocumentReadOnly<TTypes>;
export type ReadOnlyDocumentFragment<TTypes extends ReadOnlyTypes = ReadOnlyTypes> =
	ImmutableDocumentFragment &
		ReadOnlyNode<TTypes> &
		NonElementParentNodeReadOnly &
		ParentNodeReadOnly<TTypes> &
		DocumentFragmentReadOnly;
export type ReadOnlyDocumentType<TTypes extends ReadOnlyTypes = ReadOnlyTypes> =
	ImmutableDocumentType & ReadOnlyNode<TTypes> & ChildNodeReadOnly & DocumentTypeReadOnly;
export type ReadOnlyElement<TTypes extends ReadOnlyTypes = ReadOnlyTypes> = ImmutableElement &
	ReadOnlyNode<TTypes> &
	ParentNodeReadOnly<TTypes> &
	NonDocumentTypeChildNodeReadOnly<TTypes> &
	ChildNodeReadOnly &
	ElementReadOnly<TTypes>;

export type ReadOnlyCharacterData<TTypes extends ReadOnlyTypes = ReadOnlyTypes> =
	ImmutableCharacterData &
		ReadOnlyNode<TTypes> &
		NonDocumentTypeChildNodeReadOnly<TTypes> &
		ChildNodeReadOnly &
		CharacterDataReadOnly;
export type ReadOnlyComment<TTypes extends ReadOnlyTypes = ReadOnlyTypes> = ImmutableComment &
	ReadOnlyCharacterData<TTypes> &
	CommentReadOnly;
export type ReadOnlyProcessingInstruction<TTypes extends ReadOnlyTypes = ReadOnlyTypes> =
	ImmutableProcessingInstruction & ReadOnlyCharacterData<TTypes> & ProcessingInstructionReadOnly;
export type ReadOnlyText<TTypes extends ReadOnlyTypes = ReadOnlyTypes> = ImmutableText &
	ReadOnlyCharacterData<TTypes> &
	TextReadOnly;
export type ReadOnlyCDATASection<TTypes extends ReadOnlyTypes = ReadOnlyTypes> =
	ImmutableCDATASection & ReadOnlyText<TTypes> & CDATASectionReadOnly;
