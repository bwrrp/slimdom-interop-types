import { Types } from '../util/Types';

export interface TextImmutable {}

export interface TextReadOnly {
	get wholeText(): string;
}

export interface TextMutable<TTypes extends Types> {
	splitText(offset: number): TTypes['Text'];
}
