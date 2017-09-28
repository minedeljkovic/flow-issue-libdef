// @flow

declare interface TypeT<T> {}

declare interface Enums<E> extends TypeT<$Keys<E>> {
}
declare interface EnumsFunction {
  <E: {+[key: string]: string | number }>(map: E): Enums<E>;
}

declare interface Union2<A, B> extends TypeT<A | B> {
  dispatch: (x: any) => TypeT<A> | TypeT<B>;
}
declare interface UnionFunction {
  <A, B>(types: [TypeT<A>, TypeT<B>]): Union2<A, B>;
}

declare var t: {
  Nil: TypeT<void | null>;
  String: TypeT<string>;
  enums: EnumsFunction;
  union: UnionFunction;
};

const e = t.enums({
  a: 1,
  b: 2,
});

const u = t.union([t.Nil, e]);
u.dispatch = () => e; // when definition is inlined it typechecks!
