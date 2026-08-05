const MARKER = "<!-- codescene-ko -->";
const SOURCE_MARKER = "cs-code-health";

const KEEP_TERMS = new Set([
  "CodeScene",
  "Complex Method",
  "Complex Conditional",
  "Bumpy Road Ahead",
  "Deep, Nested Complexity",
  "Brain Method",
  "Brain Class",
  "God Class",
  "Large Method",
  "Large Assertion Blocks",
  "Duplicated Assertion Blocks",
  "Code Duplication",
  "Excess Number of Function Arguments",
  "String Heavy Function Arguments",
  "Primitive Obsession",
  "Missing Arguments Abstractions",
  "Constructor Over-Injection",
  "Overall Code Complexity",
  "Lines of Code in a Single File",
  "Number of Functions in a Single Module",
  "Low Cohesion",
  "Modularity Issue",
  "Developer Congestion",
  "Install CodeScene MCP",
  "The Bare Minimum",
]);

const GLOSSARY = new Map([
  ["Gates Failed", "게이트 실패"],
  ["Gates Passed", "게이트 통과"],
  ["Reason for failure", "실패 사유"],
  ["New code is healthy", "새 코드가 건강한가"],
  ["Enforce critical code health rules", "치명적 코드 건강도 규칙 준수"],
  ["Violations", "위반"],
  ["Code Health Impact", "코드 건강도 점수"],
  ["Suppress", "무시 설정"],
  ["Active suppressions", "적용 중인 무시 설정"],
  ["Quality Gate Profile", "품질 게이트 프로파일"],
  ["See analysis details in CodeScene", "CodeScene에서 분석 상세 보기"],
  ["New issue", "새로 발견된 문제"],
  ["Our agent can fix these", "CodeScene 에이전트로 자동 수정할 수 있습니다"],
  ["Install it", "설치하기"],
  ["rules", "개 규칙"],
  ["rule", "개 규칙"],
  ["critical rule", "개 치명적 규칙"],
  ["critical rules", "개 치명적 규칙"],
]);

const TOKEN =
  /(\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\))|(`([^`\n]*)`)|(!\[[^\]]*\]\([^)]*\))|(\[([^\]]*)\]\(([^)]*)\))|(<[^>\n]+>)|(https?:\/\/[^\s)]+)/g;

const HAS_LETTER = /[A-Za-z]{2}/;
const TABLE_SEPARATOR = /^\s*\|[\s|:-]*\|\s*$/;
const CODE_LIKE = /^[\w./@-]+$/;

export function createTranslator(endpoint) {
  const cache = new Map();

  return async function translate(text) {
    if (cache.has(text)) return cache.get(text);

    const response = await fetch(`${endpoint}/translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: "ko",
        format: "text",
      }),
    });

    if (!response.ok) {
      throw new Error(
        `LibreTranslate ${response.status}: ${await response.text()}`
      );
    }

    const { translatedText } = await response.json();
    const result = translatedText ?? text;
    cache.set(text, result);
    return result;
  };
}

async function translatePhrase(phrase, translate) {
  const bare = phrase.replace(/\*\*/g, "").trim();
  const core = bare
    .replace(/^[^\p{L}\p{N}]+/u, "")
    .replace(/[^\p{L}\p{N}]+$/u, "")
    .trim();

  if (!core || !HAS_LETTER.test(core)) return phrase;
  if (KEEP_TERMS.has(core)) return phrase;
  if (CODE_LIKE.test(core) && /[._/@]/.test(core)) return phrase;

  const glossed = GLOSSARY.get(core);
  const translated = glossed ?? (await translate(core));

  return phrase.replace(core, () => translated);
}

async function translateInline(text, translate) {
  const parts = [];
  let lastIndex = 0;

  TOKEN.lastIndex = 0;
  for (let match = TOKEN.exec(text); match; match = TOKEN.exec(text)) {
    parts.push({ kind: "text", value: text.slice(lastIndex, match.index) });

    if (match[5] !== undefined) {
      parts.push({ kind: "link", label: match[6], url: match[7] });
    } else if (match[3] !== undefined) {
      parts.push({ kind: "code", value: match[3] });
    } else {
      parts.push({ kind: "keep", value: match[0] });
    }

    lastIndex = match.index + match[0].length;
  }
  parts.push({ kind: "text", value: text.slice(lastIndex) });

  const rendered = [];
  for (const part of parts) {
    if (part.kind === "keep") {
      rendered.push(part.value);
    } else if (part.kind === "code") {
      rendered.push(`\`${await translatePhrase(part.value, translate)}\``);
    } else if (part.kind === "link") {
      rendered.push(
        `[${await translatePhrase(part.label, translate)}](${part.url})`
      );
    } else {
      rendered.push(await translatePhrase(part.value, translate));
    }
  }

  return rendered.join("");
}

async function translateLine(line, translate) {
  if (line.trim().startsWith("[//]: #")) return line;
  if (TABLE_SEPARATOR.test(line)) return line;

  if (line.trim().startsWith("|")) {
    const cells = line.split("|");
    const translated = [];
    for (const cell of cells) {
      translated.push(await translateInline(cell, translate));
    }
    return translated.join("|");
  }

  return translateInline(line, translate);
}

export async function translateBody(body, translate) {
  const lines = body.split("\n");
  const output = [];
  let inFence = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      output.push(line);
      continue;
    }

    output.push(inFence ? line : await translateLine(line, translate));
  }

  return output.join("\n");
}

export function buildComment(translated, original) {
  return [
    MARKER,
    "🇰🇷 **CodeScene 리뷰 한국어 번역** — LibreTranslate 기계 번역이라 표현이 어색할 수 있습니다.",
    "",
    translated.trim(),
    "",
    "<details><summary>원문 보기</summary>",
    "",
    original.trim(),
    "",
    "</details>",
  ].join("\n");
}

async function github(path, token, body) {
  const response = await fetch(`https://api.github.com${path}`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`GitHub ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

async function waitForTranslator(endpoint, attempts = 60) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(`${endpoint}/languages`);
      if (response.ok) {
        const languages = await response.json();
        if (languages.some((language) => language.code === "en")) return;
      }
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  throw new Error("LibreTranslate 준비 시간 초과");
}

export async function run() {
  const { GITHUB_EVENT_PATH, GITHUB_TOKEN, GITHUB_REPOSITORY, LT_ENDPOINT } =
    process.env;

  const { readFile } = await import("node:fs/promises");
  const event = JSON.parse(await readFile(GITHUB_EVENT_PATH, "utf8"));
  const source = event.review ?? event.comment;

  if (!source?.body?.includes(SOURCE_MARKER)) {
    console.log("CodeScene 코멘트가 아니라 건너뜁니다.");
    return;
  }

  if (source.body.includes(MARKER)) {
    console.log("이미 번역된 코멘트라 건너뜁니다.");
    return;
  }

  await waitForTranslator(LT_ENDPOINT);

  const translate = createTranslator(LT_ENDPOINT);
  const translated = await translateBody(source.body, translate);
  const comment = buildComment(translated, source.body);
  const number = event.pull_request.number;

  if (event.comment) {
    await github(
      `/repos/${GITHUB_REPOSITORY}/pulls/${number}/comments/${source.id}/replies`,
      GITHUB_TOKEN,
      { body: comment }
    );
  } else {
    await github(
      `/repos/${GITHUB_REPOSITORY}/issues/${number}/comments`,
      GITHUB_TOKEN,
      { body: comment }
    );
  }

  console.log("한국어 번역 코멘트를 게시했습니다.");
}

if (process.env.GITHUB_EVENT_PATH) {
  run().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
