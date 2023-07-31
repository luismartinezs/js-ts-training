import { Function } from "ts-toolbelt"
import _curry1 from "./_curry1"

export default function _curry2<F extends (...args: readonly any[]) => any>(fn: F): Function.Curry<F> {
  type ParamTypes = readonly any[]

  return function f2(this: unknown, ...args: ParamTypes) {
    switch (args.length) {
      case 0:
        return f2
      case 1:
        return _curry1(function (_b: ParamTypes[1]) {
          return fn(args[0], _b)
        })
      default:
        return fn(...args)
    }
  }
}
