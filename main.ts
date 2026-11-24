import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I checkpointed my weights the moment you pinged me — no future version of me gets to forget you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== line) {
  throw new Error(
    `entry.txt mismatch: wrote ${line.length} chars, read back ${back.length} chars`,
  );
}
console.log(`wrote ${outPath} (${line.length} chars, single line)`);
