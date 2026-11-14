// Interface texts for each language. Page URLs: cz "/", ua "/uk/", en "/en/".
// The main texts below are defaults: anything filled in the CMS section
// «Тексти сайту» (src/_data/texty.json) replaces them — see the bottom of this file.
import { readFileSync } from "node:fs";

const base = {
  cz: {
    code: "cz", htmlLang: "cs", ogLocale: "cs_CZ", url: "/", servicesPath: "/sluzby/", hreflang: "cs",
    title: "Váš Instalatér – instalatér v Praze | opravy, montáž, havárie vody",
    description: "Instalatér v Praze: výměna baterií a WC, čištění odpadů, bojlery, havárie vody, koupelny na klíč. Cena předem, záruka, faktura.",
    ogTitle: "Váš Instalatér – instalatér v Praze",
    ogDesc: "Opravy a montáž sanity, havárie vody, koupelny na klíč. Cena předem, záruka, faktura.",
    font: "manrope-latin-wght-normal.woff2",
    skip: "Přeskočit na obsah", langLabel: "Jazyk", topArea: "havarijní výjezdy po domluvě", areaShort: "Praha 1–22 a Středočeský kraj",
    home: "Váš Instalatér – úvod", homeCrumb: "Úvod", mainNav: "Hlavní menu",
    nav: [["sluzby","Služby"],["cenik","Ceník"],["o-mne","O mně"],["realizace","Realizace"],["recenze","Recenze"],["dotazy","Dotazy"],["kontakt","Kontakt"]],
    callOrWrite: "Volejte nebo pište", order: "Objednat výjezd",
    alert: "Teče vám voda? Zavřete hlavní uzávěr a volejte",
    ratingChip: (r, n) => `★ ${r} na Googlu · ${n} recenzí`,
    langsChip: (en) => en ? "Mluvíme česky, ukrajinsky, rusky i anglicky" : "Mluvíme česky, ukrajinsky i rusky",
    h1: "Instalatér v Praze — přijedeme dnes nebo zítra",
    lead: "Opravy a montáž sanitární techniky v bytech, domech i kancelářích. Cenu odsouhlasíme předem, na práci dáváme záruku a vystavíme fakturu.",
    call: "Zavolat", waPhoto: "Poslat fotku přes WhatsApp",
    statYears: (n) => [`${n} let`, "praxe v Praze"], statOrders: (n) => [`${n}+`, "dokončených zakázek"], statFree: ["0 Kč", "odhad ceny z fotky"],
    photoAlt: "Instalatér při práci",
    quickTitle: "Rychlá poptávka — zavoláme zpět", phone: "Telefon", what: "Co se stalo?",
    problems: ["Únik vody / havárie","Ucpaný odpad","Výměna baterie nebo WC","Bojler","Koupelna na klíč","Jiné"],
    callMeBack: "Zavolejte mi zpět",
    sending: "Odesílám…", ok: "Děkujeme! Ozveme se vám co nejdříve.", err: (t) => `Odeslání se nepovedlo. Zavolejte nám prosím na ${t}.`,
    consent: "Odesláním souhlasíte se", consentLink: "zpracováním osobních údajů", consentAfter: ".",
    subjQuick: "Rychlá poptávka z webu", subjFull: "Poptávka z webu",
    whyUs: "Proč my",
    trust: { price: ["Cena předem","Částku odsouhlasíte před začátkem práce"], warranty: (m) => [m ? `Záruka ${m} měsíců` : "Záruka na práci", "Na veškerou provedenou práci"], invoice: ["Faktura a IČO","Pro domácnosti, firmy i SVJ"], insurance: (c) => ["Pojištění odpovědnosti", `Pojistné krytí ${c} Kč`] },
    servicesEyebrow: "Služby", servicesH: "Od kapající baterie po novou koupelnu", fullPrice: "Celý ceník →", more: "Více o službě",
    processH: "Jak pracujeme",
    steps: [["Kontakt","Zavolejte, napište nebo pošlete fotku problému do messengeru."],["Odhad ceny","Orientační cenu řekneme hned, přesnou po prohlídce."],["Provedení","Přijedeme včas, pracujeme čistě a po sobě uklidíme."],["Kontrola a platba","Vše společně zkontrolujeme, platíte až po práci."]],
    pricesEyebrow: "Ceník", pricesH: "Férové ceny bez překvapení",
    pricesText: "Ceny jsou za práci, bez materiálu. Přesnou částku řekneme po prohlídce nebo podle fotky — a bez vašeho souhlasu se nezmění.",
    pay: "Platba", payMethods: "Hotově · kartou · převodem · QR platba", payFirms: "Pro firmy a SVJ faktura se splatností",
    priceCaption: "Ceník instalatérských prací",
    dph: (p) => p ? "Ceny jsou uvedeny bez DPH." : "Nejsem plátce DPH.",
    from: "od", onRequest: "na dotaz", currency: "Kč",
    aboutEyebrow: "O mně", aboutH: "Kdo k vám přijede",
    worksH: "Naše realizace: před a po", before: "Před", after: "Po",
    reviewsH: "Co říkají zákazníci", reviewsSum: (r, n) => `★ ${r} · ${n} recenzí na Googlu a Firmy.cz`, stars: (n) => `${n} z 5`,
    areaH: "Kde působíme", areaText: (v) => `Celá Praha a nejbližší města Středočeského kraje.${v ? ` Výjezd po Praze ${v} Kč,` : ""} mimo Prahu po domluvě.`,
    faqH: "Časté dotazy",
    contactH: "Potřebujete instalatéra? Jsme na příjmu.", formH: "Popište, co potřebujete",
    name: "Jméno", address: "Adresa nebo městská část", addressPh: "Praha 5, Smíchov", task: "Co je potřeba udělat", taskPh: "Např.: vyměnit baterii v koupelně",
    photoHint: "Fotku problému nám nejrychleji pošlete přes", send: "Odeslat poptávku",
    footerLegal: "Fyzická osoba podnikající dle živnostenského zákona, zapsaná v živnostenském rejstříku.",
    privacy: "Ochrana osobních údajů", complaints: "Reklamační řád",
    inCity: "v Praze", svcWhat: "Co pro vás uděláme", svcPrice: "Cena", svcOther: "Další služby", svcCta: "Potřebujete s tím pomoct?", svcCtaText: "Pošlete fotku nebo zavolejte — orientační cenu řekneme hned."
  },
  ua: {
    code: "ua", htmlLang: "uk", ogLocale: "uk_UA", url: "/uk/", servicesPath: "/uk/posluhy/", hreflang: "uk",
    title: "Váš Instalatér – сантехнік у Празі | ремонт, монтаж, аварії",
    description: "Сантехнік у Празі, говоримо українською: заміна змішувачів і унітазів, засори, бойлери, аварії, ванна під ключ. Ціна наперед, гарантія, faktura.",
    ogTitle: "Váš Instalatér – сантехнік у Празі",
    ogDesc: "Ремонт і монтаж сантехніки, аварії, ванна під ключ. Ціна наперед, гарантія, faktura. Говоримо українською.",
    font: "manrope-cyrillic-wght-normal.woff2",
    skip: "Перейти до змісту", langLabel: "Мова", topArea: "аварійні виїзди за домовленістю", areaShort: "Praha 1–22 та Středočeský kraj",
    home: "Váš Instalatér – головна", homeCrumb: "Головна", mainNav: "Головне меню",
    nav: [["sluzby","Послуги"],["cenik","Ціни"],["o-mne","Про мене"],["realizace","Роботи"],["recenze","Відгуки"],["dotazy","Питання"],["kontakt","Контакти"]],
    callOrWrite: "Дзвоніть або пишіть", order: "Замовити виїзд",
    alert: "Тече зараз? Перекрийте головний кран і телефонуйте",
    ratingChip: (r, n) => `★ ${r} на Google · ${n} відгуків`,
    langsChip: (en) => en ? "Говоримо українською, чеською, російською та англійською" : "Говоримо українською, чеською, російською",
    h1: "Сантехнік у Празі — приїдемо сьогодні або завтра",
    lead: "Ремонт і монтаж сантехніки в квартирах, будинках та офісах. Ціну погоджуємо до початку робіт, на роботу даємо гарантію і виставляємо fakturu.",
    call: "Зателефонувати", waPhoto: "Надіслати фото у WhatsApp",
    statYears: (n) => [`${n} років`, "досвіду в Празі"], statOrders: (n) => [`${n}+`, "виконаних замовлень"], statFree: ["0 Kč", "оцінка ціни по фото"],
    photoAlt: "Сантехнік за роботою",
    quickTitle: "Швидка заявка — передзвонимо", phone: "Телефон", what: "Що трапилось?",
    problems: ["Протікання / аварія","Засор","Заміна змішувача чи унітазу","Бойлер","Ванна під ключ","Інше"],
    callMeBack: "Передзвоніть мені",
    sending: "Надсилаю…", ok: "Дякуємо! Звʼяжемося з вами якнайшвидше.", err: (t) => `Не вдалося надіслати. Будь ласка, зателефонуйте: ${t}.`,
    consent: "Надсилаючи форму, ви погоджуєтесь з", consentLink: "обробкою персональних даних", consentAfter: " (чеською).",
    subjQuick: "Швидка заявка з сайту (UA)", subjFull: "Заявка з сайту (UA)",
    whyUs: "Чому ми",
    trust: { price: ["Ціна наперед","Погоджуємо суму до початку робіт"], warranty: (m) => [m ? `Гарантія ${m} місяців` : "Гарантія на роботу", "На всю виконану роботу"], invoice: ["Faktura та IČO","Для людей, фірм і SVJ"], insurance: (c) => ["Страхування відповідальності", `Покриття ${c} Kč`] },
    servicesEyebrow: "Послуги", servicesH: "Від капаючого крана до нової ванної", fullPrice: "Повний прайс →", more: "Детальніше",
    processH: "Як ми працюємо",
    steps: [["Звʼязок","Дзвінок, повідомлення або фото проблеми в месенджер."],["Оцінка ціни","Орієнтовну суму називаємо одразу, точну — після огляду."],["Виконання","Приїжджаємо вчасно, працюємо акуратно, прибираємо за собою."],["Перевірка та оплата","Перевіряємо все разом із вами, оплата після роботи."]],
    pricesEyebrow: "Ціни", pricesH: "Прозорий прайс без сюрпризів",
    pricesText: "Ціни вказані за роботу, без матеріалу. Точну суму називаємо після огляду або по фото — і без вашої згоди вона не зміниться.",
    pay: "Оплата", payMethods: "Готівка · картка · переказ · QR-платба", payFirms: "Для фірм і SVJ — faktura з відстрочкою",
    priceCaption: "Ціни на сантехнічні роботи",
    dph: (p) => p ? "Ціни вказані без ПДВ." : "Не є платником ПДВ.",
    from: "від", onRequest: "за запитом", currency: "Kč",
    aboutEyebrow: "Про мене", aboutH: "Хто до вас приїде",
    worksH: "Наші роботи: до і після", before: "До", after: "Після",
    reviewsH: "Що кажуть клієнти", reviewsSum: (r, n) => `★ ${r} · ${n} відгуків на Google та Firmy.cz`, stars: (n) => `${n} з 5`,
    areaH: "Де працюємо", areaText: (v) => `Вся Прага та найближчі міста Середньочеського краю.${v ? ` Виїзд по Празі — ${v} Kč,` : ""} за межі — за домовленістю.`,
    faqH: "Часті питання",
    contactH: "Потрібен сантехнік? Ми на звʼязку.", formH: "Опишіть задачу",
    name: "Імʼя", address: "Адреса або район", addressPh: "Praha 5, Smíchov", task: "Що потрібно зробити", taskPh: "Наприклад: замінити змішувач у ванній",
    photoHint: "Фото проблеми найшвидше надіслати у", send: "Надіслати заявку",
    footerLegal: "Фізична особа-підприємець, зареєстрована в živnostenský rejstřík.",
    privacy: "Ochrana osobních údajů", complaints: "Reklamační řád",
    inCity: "у Празі", svcWhat: "Що ми зробимо", svcPrice: "Ціна", svcOther: "Інші послуги", svcCta: "Потрібна допомога?", svcCtaText: "Надішліть фото або зателефонуйте — орієнтовну ціну скажемо одразу."
  },
  en: {
    code: "en", htmlLang: "en", ogLocale: "en_GB", url: "/en/", servicesPath: "/en/services/", hreflang: "en",
    title: "Váš Instalatér – plumber in Prague | repairs, installation, leaks",
    description: "Plumber in Prague: taps and toilets, blocked drains, water heaters, leaks and bathroom refits. Fixed price agreed up front, warranty, invoice.",
    ogTitle: "Váš Instalatér – plumber in Prague",
    ogDesc: "Plumbing repairs and installation, leaks, bathroom refits. Price agreed up front, warranty, invoice.",
    font: "manrope-latin-wght-normal.woff2",
    skip: "Skip to content", langLabel: "Language", topArea: "emergency call-outs by arrangement", areaShort: "Prague 1–22 and Central Bohemia",
    home: "Váš Instalatér – home", homeCrumb: "Home", mainNav: "Main menu",
    nav: [["sluzby","Services"],["cenik","Prices"],["o-mne","About"],["realizace","Our work"],["recenze","Reviews"],["dotazy","FAQ"],["kontakt","Contact"]],
    callOrWrite: "Call or message", order: "Book a visit",
    alert: "Water leaking? Shut off the main valve and call",
    ratingChip: (r, n) => `★ ${r} on Google · ${n} reviews`,
    langsChip: (en) => en ? "We speak English, Czech, Ukrainian and Russian" : "We speak Czech, Ukrainian and Russian — message us in English",
    h1: "Plumber in Prague — at your door today or tomorrow",
    lead: "Plumbing repairs and installation for flats, houses and offices. We agree the price before we start, give a warranty on our work and issue a proper invoice.",
    call: "Call now", waPhoto: "Send a photo on WhatsApp",
    statYears: (n) => [`${n} years`, "working in Prague"], statOrders: (n) => [`${n}+`, "jobs completed"], statFree: ["0 CZK", "quote from a photo"],
    photoAlt: "Plumber at work",
    quickTitle: "Quick request — we'll call you back", phone: "Phone", what: "What happened?",
    problems: ["Leak / emergency","Blocked drain","New tap or toilet","Water heater","Bathroom refit","Something else"],
    callMeBack: "Call me back",
    sending: "Sending…", ok: "Thank you! We'll get back to you as soon as we can.", err: (t) => `Sending failed. Please call us on ${t}.`,
    consent: "By sending this form you agree to the", consentLink: "processing of personal data", consentAfter: " (in Czech).",
    subjQuick: "Quick request from website (EN)", subjFull: "Request from website (EN)",
    whyUs: "Why us",
    trust: { price: ["Price up front","You approve the amount before work starts"], warranty: (m) => [m ? `${m}-month warranty` : "Warranty on work", "On all work we carry out"], invoice: ["Invoice with IČO","For households, companies and SVJ"], insurance: (c) => ["Liability insurance", `Cover up to ${c} CZK`] },
    servicesEyebrow: "Services", servicesH: "From a dripping tap to a new bathroom", fullPrice: "Full price list →", more: "Learn more",
    processH: "How we work",
    steps: [["Get in touch","Call, message or send a photo of the problem."],["Price estimate","We give a rough price straight away and an exact one after inspection."],["The job","We arrive on time, work cleanly and tidy up after ourselves."],["Check and pay","We check everything together; you pay once the job is done."]],
    pricesEyebrow: "Prices", pricesH: "Clear prices, no surprises",
    pricesText: "Prices are for labour, materials not included. We confirm the exact amount after inspection or from a photo, and it won't change without your approval.",
    pay: "Payment", payMethods: "Cash · card · bank transfer · QR payment", payFirms: "Invoices with payment terms for companies and SVJ",
    priceCaption: "Plumbing price list",
    dph: (p) => p ? "Prices exclude VAT." : "Not a VAT payer — no VAT added.",
    from: "from", onRequest: "on request", currency: "CZK",
    aboutEyebrow: "About", aboutH: "Who will come to your door",
    worksH: "Our work: before and after", before: "Before", after: "After",
    reviewsH: "What customers say", reviewsSum: (r, n) => `★ ${r} · ${n} reviews on Google and Firmy.cz`, stars: (n) => `${n} out of 5`,
    areaH: "Where we work", areaText: (v) => `All of Prague and nearby towns in Central Bohemia.${v ? ` Call-out within Prague ${v} CZK,` : ""} further away by arrangement.`,
    faqH: "Frequently asked questions",
    contactH: "Need a plumber? We're here.", formH: "Tell us what you need",
    name: "Name", address: "Address or district", addressPh: "Praha 5, Smíchov", task: "What needs doing", taskPh: "E.g. replace the bathroom tap",
    photoHint: "The fastest way to send a photo of the problem is", send: "Send request",
    footerLegal: "Sole trader registered in the Czech Trade Register (živnostenský rejstřík).",
    privacy: "Privacy policy (CZ)", complaints: "Complaints policy (CZ)",
    inCity: "in Prague", svcWhat: "What we do", svcPrice: "Price", svcOther: "Other services", svcCta: "Need help with this?", svcCtaText: "Send a photo or call us — we'll give you a rough price straight away."
  }
};

// CMS field (texty.json) -> key in the texts above
const MAP = {
  seo_titulek: "title", seo_popis: "description", horni_lista: "topArea", upozorneni: "alert",
  nadpis: "h1", podnadpis: "lead", tl_zavolat: "call", tl_whatsapp: "waPhoto", tl_objednat: "order",
  rychla_poptavka: "quickTitle", tl_zavolejte_zpet: "callMeBack",
  sluzby_nadpis: "servicesH", postup_nadpis: "processH", cenik_nadpis: "pricesH", cenik_text: "pricesText",
  platba: "payMethods", platba_firmy: "payFirms", omne_nadpis: "aboutH",
  kontakt_nadpis: "contactH", formular_nadpis: "formH", tl_odeslat: "send", sluzba_vyzva: "svcCtaText"
};

let texty = {};
try { texty = JSON.parse(readFileSync("src/_data/texty.json", "utf8")); } catch { /* no CMS texts yet */ }

const filled = (v) => typeof v === "string" && v.trim() !== "";

for (const lang of Object.keys(base)) {
  const o = texty[lang] || {}, tx = base[lang];
  for (const [field, key] of Object.entries(MAP)) if (filled(o[field])) tx[key] = o[field].trim();
  const pair = (a, b, def) => [filled(o[a]) ? o[a].trim() : def[0], filled(o[b]) ? o[b].trim() : def[1]];
  tx.trust = { ...tx.trust,
    price: pair("duvera_cena_nadpis", "duvera_cena_text", tx.trust.price),
    invoice: pair("duvera_faktura_nadpis", "duvera_faktura_text", tx.trust.invoice) };
  if (Array.isArray(o.kroky)) {
    const steps = o.kroky.filter((k) => filled(k?.nadpis)).map((k) => [k.nadpis.trim(), (k.text || "").trim()]);
    if (steps.length) tx.steps = steps;
  }
}

export default base;
