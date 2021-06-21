# slimdom-interop-types

**Note: this library is currently work-in-progress and should not yet be used for anything serious!**

Minimal TypeScript typings for DOM nodes, intended for allowing libraries to be
made independent of the underlying DOM implementation.

Libraries making use of the DOM frequently make use of the built-in DOM types in
TypeScript. However, these types include pretty much all of the DOM and HTML
standards, while libraries usually only require a small subset of this API. This
makes it hard for such libraries to accept nodes from other DOM implementations,
as those may not implement the complete interfaces even if they do implement the
types required by the library.

In particular, this library aims to provide a set of types that are compatible
with both [slimdom] as well as TypeScript's built-in `lib.dom.d.ts`.

[slimdom]: https://github.com/bwrrp/slimdom.js

## Mutability levels

Unlike TypeScript's built-in DOM types, these typings distinguish between
different levels of mutability:

-   Immutable: contains only properties of nodes that can never change during the node's lifetime.
-   ReadOnly: allows access to DOM state that may change, but does not allow making any changes.
-   Mutable: full access to read and modify DOM state.

Each value can be assigned to a variable of more restrictive mutability, but the
reverse is not true.

## Inheritance

This library does not model inheritance in the traditional way, for
compatibility with different independent inheritance hierarchies. This does
mean, unfortunately, that some types may unexpectedly be assignable to each
other, as there is (currently) no difference in shape between them. For example,
CDATASection nodes have the exact same shape as Text nodes. If this difference
is important, make sure to check the nodeType property in code.
