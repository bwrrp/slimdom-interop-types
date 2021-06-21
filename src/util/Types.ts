export interface Types {
	Node: unknown;

	Attr: unknown;
	Document: unknown;
	DocumentFragment: unknown;
	DocumentType: unknown;
	Element: unknown;

	CharacterData: unknown;
	Comment: unknown;
	ProcessingInstruction: unknown;
	Text: unknown;
	CDATASection: unknown;
}

export interface SpecificTypes<
	TNode,
	TAttr extends TNode,
	TDocument extends TNode,
	TDocumentFragment extends TNode,
	TDocumentType extends TNode,
	TElement extends TNode,
	TCharacterData extends TNode,
	TComment extends TCharacterData,
	TProcessingInstruction extends TCharacterData,
	TText extends TCharacterData,
	TCDATASection extends TText
> extends Types {
	Node: TNode;

	Attr: TAttr;
	Document: TDocument;
	DocumentFragment: TDocumentFragment;
	DocumentType: TDocumentType;
	Element: TElement;

	CharacterData: TCharacterData;
	Comment: TComment;
	ProcessingInstruction: TProcessingInstruction;
	Text: TText;
	CDATASection: TCDATASection;
}
