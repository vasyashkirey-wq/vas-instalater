import t from "./_data/t.js";

const pick = (s, key, lang) => s[`${key}_${lang}`] || s[`${key}_cz`] || "";

export default {
  eleventyComputed: {
    lang: (d) => d.sp.lang,
    svc: (d) => d.sp.s,
    alt: (d) => d.sp.alt,
    permalink: (d) => d.sp.url,
    pageTitle: (d) => `${pick(d.sp.s, "nazev", d.sp.lang)} ${t[d.sp.lang].inCity} – Váš Instalatér`,
    pageDesc: (d) => pick(d.sp.s, "popis", d.sp.lang)
  }
};
