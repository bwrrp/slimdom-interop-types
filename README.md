# slimdom-interop-types

**Note: this library is currently work-in-progress and should not yet be used for anything serious!**

Minimal TypeScript typings for DOM nodes, intended for allowing libraries to be made independent of
the underlying DOM implementation.

Libraries making use of the DOM frequently make use of the built-in DOM types in TypeScript.
However, these types include pretty much all of the DOM and HTML standards, while libraries usually
only require a small subset of this API. This makes it hard for such libraries to accept nodes from
other DOM implementations, as those may not implement the complete interfaces even if they do
implement the types required by the library.

In particular, this library aims to provide a set of types that are compatible with both [slimdom]
as well as TypeScript's built-in `lib.dom.d.ts`.

[slimdom]: https://github.com/bwrrp/slimdom.js
