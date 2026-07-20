import { useEffect, useState } from "react";
import {
  createHighlighterCore,
  type HighlighterCore,
} from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import githubLight from "shiki/themes/github-light.mjs";
import githubDark from "shiki/themes/github-dark.mjs";
import typescript from "shiki/langs/typescript.mjs";
import javascript from "shiki/langs/javascript.mjs";
import tsx from "shiki/langs/tsx.mjs";
import jsx from "shiki/langs/jsx.mjs";
import css from "shiki/langs/css.mjs";
import bash from "shiki/langs/bash.mjs";
import json from "shiki/langs/json.mjs";
import markdown from "shiki/langs/markdown.mjs";

const SUPPORTED_LANGS = [
  "typescript",
  "javascript",
  "tsx",
  "jsx",
  "css",
  "bash",
  "json",
  "markdown",
  "text",
] as const;

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [githubLight, githubDark],
      langs: [typescript, javascript, tsx, jsx, css, bash, json, markdown],
      engine: createOnigurumaEngine(import("shiki/wasm")),
    });
  }
  return highlighterPromise;
}

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [html, setHtml] = useState<string | null>(null);
  const isSupported = (
    value: string | undefined
  ): value is (typeof SUPPORTED_LANGS)[number] =>
    SUPPORTED_LANGS.includes(value as (typeof SUPPORTED_LANGS)[number]);
  const lang = isSupported(language) ? language : "text";

  useEffect(() => {
    let cancelled = false;

    getHighlighter().then((highlighter) => {
      if (cancelled) return;
      setHtml(
        highlighter.codeToHtml(code, {
          lang,
          themes: { light: "github-light", dark: "github-dark" },
          defaultColor: false,
        })
      );
    });

    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  if (!html) {
    return (
      <pre className="label-mono text-sm bg-surface border border-black p-4 my-6 overflow-x-auto">
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="label-mono text-sm border border-black p-4 my-6 overflow-x-auto [&_pre]:!bg-transparent [&_pre]:!m-0"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default CodeBlock;
