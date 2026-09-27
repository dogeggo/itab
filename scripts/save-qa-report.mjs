import fs from "node:fs";

// Playwright CLI 将 run-code 的返回值放在 Result 标记后的 JSON 行。
const [log, target] = process.argv.slice(2);
if (!log || !target) throw new Error("用法：node scripts/save-qa-report.mjs 日志路径 报告路径");
const text = fs.readFileSync(log, "utf8");
const lines = text.split(/\r?\n/);
const marker = lines.findIndex(line => line.replace(/^\uFEFF/, "") === "### Result");
if (marker < 0) throw new Error(text.slice(0, 2500));
const result = JSON.parse(lines[marker + 1]);
fs.writeFileSync(target, JSON.stringify(result, null, 2) + "\n");
const failures = result.results?.filter(row => row.error || row.errors?.length || row.cardStatus !== "ready" || row.dialogStatus !== "ready");
const passed = result.passed !== false && !result.failure && !result.errors?.length && !failures?.length;
console.log(JSON.stringify({report: target, passed, checks: result.checks?.length, components: result.results?.length, failures}, null, 2));
if (!passed) process.exitCode = 1;
