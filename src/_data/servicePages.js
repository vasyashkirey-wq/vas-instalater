// One page per service per language, generated from sluzby.json.
import { readFileSync } from "node:fs";
import t from "./t.js";

export default function () {
  const sluzby = JSON.parse(readFileSync("src/_data/sluzby.json", "utf8"));
  const langs = Object.keys(t);
  const pages = [];
  for (const s of sluzby) {
    if (!s.slug) continue;
    const alt = Object.fromEntries(langs.map((l) => [l, `${t[l].servicesPath}${s.slug}/`]));
    for (const lang of langs) pages.push({ lang, s, url: alt[lang], alt });
  }
  return pages;
}
