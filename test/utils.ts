export type Expect<T extends true> = T;
export type ExpectNot<T extends false> = T;
export type CanAssign<TFrom, TTo> = TFrom extends TTo ? true : false;
