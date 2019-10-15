import * as array from "fp-ts/lib/Array"
import { pipe } from "fp-ts/lib/pipeable"
import * as t from "io-ts"
import { fold } from "fp-ts/lib/Either"
import { option } from "fp-ts/lib/Option"

const jsToString = (value: t.mixed) => (value === undefined ? "undefined" : JSON.stringify(value))

export type TReporterOptions = {
  sensitiveValues?: boolean
}

export const formatValidationError = (error: t.ValidationError, opts?: TReporterOptions) => {
  const path = error.context
      .map((c) => c.key)
      // The context entry with an empty key is the original type ("default
      // context"), not an type error.
      .filter((key) => key.length > 0)
      .join(".")

  // The actual error is last in context
  const maybeErrorContext = array.last(
      // https://github.com/gcanti/fp-ts/pull/544/files
      error.context as t.ContextEntry[]
  )

  return option.map(maybeErrorContext, (errorContext) => {
    const expectedType = errorContext.type.name
    return (
        `Expecting ${expectedType}`
        + (path === "" ? "" : ` at ${path}`)
        + ` but instead got: ${ opts && opts.sensitiveValues ? "*REDACTED*" : jsToString(error.value)}.`
    )
  })
}

export const report = <T>(validation: t.Validation<T>, opts?: TReporterOptions) => (
    pipe(validation, fold((errors) => array.compact(errors.map((v) => formatValidationError(v, opts))), () => []))
)
