import * as t from "io-ts";
export declare type TReporterOptions = {
    sensitiveValues?: boolean;
};
export declare const formatValidationError: (error: t.ValidationError, opts?: TReporterOptions | undefined) => import("fp-ts/lib/Option").Option<string>;
export declare const report: <T>(validation: import("fp-ts/lib/Either").Either<t.Errors, T>, opts?: TReporterOptions | undefined) => string[];
