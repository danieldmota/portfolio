import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const standaloneRoot = join(projectRoot, ".next", "standalone");

mkdirSync(join(standaloneRoot, ".next"), { recursive: true });
cpSync(join(projectRoot, "public"), join(standaloneRoot, "public"), { recursive: true });
cpSync(join(projectRoot, ".next", "static"), join(standaloneRoot, ".next", "static"), {
  recursive: true,
});
