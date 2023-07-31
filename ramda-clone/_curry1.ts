// REF https://github.com/ramda/ramda/blob/v0.29.0/source/internal/_curry1.js
import { Function } from "ts-toolbelt"

export default function _curry1<F extends (...args: any) => any>(fn: F): Function.Curry<F> {
  return function f1(this: unknown) {
    if (arguments.length === 0) {
      return f1
    } else {
      return fn.apply(this, arguments)
    }
  }
}
