import type { AttrImmutable } from './interfaces/Attr';
import type { CDATASectionImmutable } from './interfaces/CDATASection';
import type { CharacterDataImmutable } from './interfaces/CharacterData';
import type { CommentImmutable } from './interfaces/Comment';
import type { DocumentFragmentImmutable } from './interfaces/DocumentFragment';
import type { DocumentImmutable } from './interfaces/Document';
import type { DocumentTypeImmutable } from './interfaces/DocumentType';
import type { ElementImmutable } from './interfaces/Element';
import type { NodeImmutable } from './interfaces/Node';
import { ProcessingInstructionImmutable } from './interfaces/ProcessingInstruction';
import { TextImmutable } from './interfaces/Text';

export type ImmutableNode = NodeImmutable;

export type ImmutableAttr = ImmutableNode & AttrImmutable;
export type ImmutableDocument = ImmutableNode & DocumentImmutable;
export type ImmutableDocumentFragment = ImmutableNode & DocumentFragmentImmutable;
export type ImmutableDocumentType = ImmutableNode & DocumentTypeImmutable;
export type ImmutableElement = ImmutableNode & ElementImmutable;

export type ImmutableCharacterData = ImmutableNode & CharacterDataImmutable;
export type ImmutableComment = ImmutableCharacterData & CommentImmutable;
export type ImmutableProcessingInstruction = ImmutableCharacterData &
	ProcessingInstructionImmutable;
export type ImmutableText = ImmutableCharacterData & TextImmutable;
export type ImmutableCDATASection = ImmutableText & CDATASectionImmutable;
