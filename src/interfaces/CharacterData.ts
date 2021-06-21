export interface CharacterDataImmutable {}

export interface CharacterDataReadOnly {
	get data(): string;
	get length(): number;

	substringData(offset: number, count: number): string;
}

export interface CharacterDataMutable {
	set data(value: string);

	appendData(data: string): void;
	insertData(offset: number, data: string): void;
	deleteData(offset: number, count: number): void;
	replaceData(offset: number, count: number, data: string): void;
}
