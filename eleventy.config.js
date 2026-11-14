import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  // Static files copied as-is
  ["src/assets", "src/favicon.svg", "src/apple-touch-icon.png", "src/og-image.png", "src/robots.txt"]
    .forEach((p) => eleventyConfig.addPassthroughCopy(p));

  // Photos uploaded through the CMS (src/uploads) are resized and converted
  // to WebP + JPEG automatically on every build. Logos are skipped (eleventy:ignore).
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["webp", "jpeg"],
    widths: [400, 800, 1400],
    urlPath: "/img/",
    outputDir: "_site/img/",
    htmlOptions: {
      imgAttributes: { loading: "lazy", decoding: "async" }
    },
    sharpJpegOptions: { quality: 78, mozjpeg: true },
    sharpWebpOptions: { quality: 75 }
  });

  // "+420 777 123 456" -> "420777123456"
  eleventyConfig.addFilter("digits", (v) => String(v || "").replace(/\D/g, ""));

  // Price display: "590" -> "od 590 Kč"; empty -> "na dotaz"; free text shown as written
  eleventyConfig.addFilter("price", (val, od, t) => {
    const v = String(val ?? "").trim();
    if (!v) return t.onRequest;
    if (!/^\d[\d\s]*$/.test(v)) return v;
    const n = Number(v.replace(/\s/g, "")).toLocaleString("cs-CZ") + " " + t.currency;
    return od ? `${t.from} ${n}` : n;
  });

  // Field "x_cz" / "x_ua" / "x_en" picked by language, falling back to Czech
  eleventyConfig.addFilter("loc", (obj, key, lang) => obj?.[`${key}_${lang}`] || obj?.[`${key}_cz`] || "");

  // Text with blank lines -> list of paragraphs
  eleventyConfig.addFilter("paras", (txt) => String(txt || "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk"
  };
}
