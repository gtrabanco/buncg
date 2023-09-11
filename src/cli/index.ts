#!/usr/bin/env bun --watch
import { join } from "path";
import { App, config } from "../index";

const CWD = process.cwd(); // From where was called
await import(join(CWD, config.entrypoint ?? "src/index.ts"));

await import("../index");
App.listen(config.serve ?? config.elysia?.serve ?? {});
