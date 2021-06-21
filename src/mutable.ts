import { AttrMutable } from './interfaces/Attr';
import { CDATASectionMutable } from './interfaces/CDATASection';
import { CharacterDataMutable } from './interfaces/CharacterData';
import { CommentMutable } from './interfaces/Comment';
import { DocumentMutable } from './interfaces/Document';
import { DocumentFragmentMutable } from './interfaces/DocumentFragment';
import { DocumentTypeMutable } from './interfaces/DocumentType';
import { ElementMutable } from './interfaces/Element';
import { NodeMutable } from './interfaces/Node';
import { ProcessingInstructionMutable } from './interfaces/ProcessingInstruction';
import { TextMutable } from './interfaces/Text';
import { SpecificTypes } from './util/Types';
import { ChildNodeMutable } from './mixins/ChildNode';
import { NonDocumentTypeChildNodeMutable } from './mixins/NonDocumentTypeChildNode';
import { NonElementParentNodeMutable } from './mixins/NonElementParentNode';
import { ParentNodeMutable } from './mixins/ParentNode';
import {
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
} from './readonly';

type MutableTypes = SpecificTypes<
	MutableNode,
	MutableAttr,
	MutableDocument,
	MutableDocumentFragment,
	MutableDocumentType,
	MutableElement,
	MutableCharacterData,
	MutableComment,
	MutableProcessingInstruction,
	MutableText,
	MutableCDATASection
>;

export type MutableNode = ReadOnlyNode<MutableTypes> & NodeMutable<MutableTypes>;

export type MutableAttr = ReadOnlyAttr<MutableTypes> & MutableNode & AttrMutable;
export type MutableDocument = ReadOnlyDocument<MutableTypes> &
	MutableNode &
	NonElementParentNodeMutable &
	ParentNodeMutable<MutableTypes> &
	DocumentMutable<MutableTypes>;
export type MutableDocumentFragment = ReadOnlyDocumentFragment<MutableTypes> &
	MutableNode &
	NonElementParentNodeMutable &
	ParentNodeMutable<MutableTypes> &
	DocumentFragmentMutable;
export type MutableDocumentType = ReadOnlyDocumentType<MutableTypes> &
	MutableNode &
	ChildNodeMutable<MutableTypes> &
	DocumentTypeMutable;
export type MutableElement = ReadOnlyElement<MutableTypes> &
	MutableNode &
	ParentNodeMutable<MutableTypes> &
	NonDocumentTypeChildNodeMutable &
	ChildNodeMutable<MutableTypes> &
	ElementMutable<MutableTypes>;

export type MutableCharacterData = ReadOnlyCharacterData<MutableTypes> &
	MutableNode &
	NonDocumentTypeChildNodeMutable &
	ChildNodeMutable<MutableTypes> &
	CharacterDataMutable;
export type MutableComment = ReadOnlyComment<MutableTypes> & MutableCharacterData & CommentMutable;
export type MutableProcessingInstruction = ReadOnlyProcessingInstruction<MutableTypes> &
	MutableCharacterData &
	ProcessingInstructionMutable;
export type MutableText = ReadOnlyText<MutableTypes> &
	MutableCharacterData &
	TextMutable<MutableTypes>;
export type MutableCDATASection = ReadOnlyCDATASection<MutableTypes> &
	MutableText &
	CDATASectionMutable;
