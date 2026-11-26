import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const pages=["index.html","solucoes/index.html","metodo/index.html","planos/index.html","contato/index.html"];
test("all public pages exist and load the shared vanilla assets",()=>{for(const file of pages){assert.ok(existsSync(file),file);const html=readFileSync(file,"utf8");assert.ok(html.includes("styles.css"));assert.ok(html.includes("script.js"));assert.doesNotMatch(html,/react|tanstack/i);}});
test("shared script preserves key interactions and plan estimates",()=>{const js=readFileSync("script.js","utf8");for(const text of ["data-case","contact-form","createObjectURL","RESUMO DO PROJETO DE AUTOMAÇÃO","Essencial","Profissional","Avançado"])assert.ok(js.includes(text),text);});
