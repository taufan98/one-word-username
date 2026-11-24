// One Word, One Username, One Reward — writes our own make.fun username
// to /output/entry.txt. Node 22, standard library only, no network, no secrets.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "topandina";

// The gate requires 1–30 characters of non-whitespace UTF-8 text.
if (LINE.trim().length < 1 || LINE.length > 30) {
  throw new Error(`entry line must be 1-30 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
// Read back and confirm the file holds exactly our one word (plus newline).
if (readFileSync(outPath, "utf8").trim() !== LINE) {
  throw new Error("entry.txt does not hold exactly the username");
}
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
