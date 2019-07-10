"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_ts_1 = require("io-ts");
const PathReporter_1 = require("io-ts/lib/PathReporter");
const Either_1 = require("fp-ts/lib/Either");
exports.ArrayFromJSONString = (fa) => new io_ts_1.Type("ArrayFromJSONString", (u) => io_ts_1.Array.is(u), (u, c) => Either_1.either.chain(io_ts_1.string.validate(u, c), s => {
    try {
        const input = JSON.parse(s);
        let out = [];
        for (const item of input) {
            const decoded = fa.decode(item);
            if (Either_1.isLeft(decoded))
                return io_ts_1.failure(s, c, PathReporter_1.PathReporter.report(decoded).join(","));
            out = [...out, decoded.right];
        }
        return io_ts_1.success(out);
    }
    catch (error) {
        return io_ts_1.failure(s, c, "invalid JSON");
    }
}), String);
