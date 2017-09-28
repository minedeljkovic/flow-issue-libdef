// @flow

import t from 'tcomb';

const e = t.enums({
  a: 1,
  b: 2,
});

const u = t.union([t.Nil, e]);
u.dispatch = () => e;
 // this does typecheck!: u.dispatch = () => t.Nil;
