# Váš Instalatér — сайт з адмінкою

Сайт збирається з шаблону (Eleventy), а всі змінні дані — контакти, ціни, послуги, тексти, фото, відгуки — лежать у файлах `src/_data/*.json`. Їх редагують в адмінці **Pages CMS** у браузері, без коду.

Схема роботи: зміна в адмінці → зберігається в GitHub → Netlify перебудовує сайт → приблизно за хвилину вона вже на сайті.

## Що є на сайті

| Сторінки | Адреса |
|---|---|
| Головна чеською / українською / англійською | `/`, `/uk/`, `/en/` |
| 6 сторінок послуг × 3 мови (18 сторінок) | `/sluzby/…`, `/uk/posluhy/…`, `/en/services/…` |
| Ochrana osobních údajů (GDPR) | `/ochrana-osobnich-udaju/` |
| Reklamační řád (з інформацією про ČOI) | `/reklamacni-rad/` |

Також є:
- **Блок «Хто я».** Фото, якщо воно є, і текст. Без фото показується велика літера імені.
- **Автоматичне стиснення фото.** Можна завантажувати фото прямо з телефону: під час збірки сайт робить з них версії 400, 800 і 1400 px у WebP і JPEG.
- **Заявки на email** (Web3Forms) **і в Telegram** (через вбудовану функцію Netlify або Cloudflare).
- **Статистика Umami.** Без cookies, рахує відвідувачів і натискання на телефон та WhatsApp.
- **Для Google:** розмітка Schema.org, звʼязки між мовними версіями (hreflang) і `sitemap.xml` з усіма сторінками.

**Порожні поля просто не показуються.** Немає рейтингу — немає зірок. Немає відгуків чи робіт — немає й розділу. Немає ціни — пише «na dotaz».

```
.pages.yml                 ← налаштування адмінки
src/_data/kontakty.json    ← телефон, email, години, IČO, ключі сервісів
src/_data/omne.json        ← блок «Хто я»
src/_data/sluzby.json      ← послуги та тексти їхніх сторінок
src/_data/cenik.json       ← прайс
src/_data/realizace.json   ← роботи «до/після»
src/_data/recenze.json     ← відгуки
src/_data/faq.json         ← часті питання
src/_data/gdpr.json        ← дата й сервіси для юридичних сторінок
src/_data/texty.json       ← заголовки, кнопки, кроки, SEO — розділ «Тексти сайту»
src/_data/t.js             ← решта службових текстів інтерфейсу CZ/UA/EN
src/_includes/             ← дизайн сторінок
functions/api/lead.js      ← відправка заявок у Telegram
```

---

## Налаштування (один раз)

### 1. GitHub
1. Створіть **приватний** репозиторій, наприклад `vas-instalater`.
2. У папці проєкту:
   ```
   git init
   git add .
   git commit -m "Сайт Váš Instalatér"
   git branch -M main
   git remote add origin https://github.com/ВАШ_ЛОГІН/vas-instalater.git
   git push -u origin main
   ```
   Перевірте, що `.pages.yml` і папка `functions` потрапили в репозиторій.

### 2. Хостинг: Netlify (основний) або Cloudflare Pages
**Netlify:** app.netlify.com → Add new site → Import from Git → `vas-instalater`. Налаштування збірки беруться з `netlify.toml` (Build command `npm run build`, Publish directory `_site`). Потім Domain management → `vasinstalater.cz`.

**Cloudflare Pages** (альтернатива): Workers & Pages → Create → Pages → Connect to Git → `vas-instalater`; Framework preset **None**, Build command `npm run build`, Build output directory `_site`, змінна `NODE_VERSION` = `20`.

Telegram-функція є для обох: `netlify/functions/lead.mjs` (Netlify) і `functions/api/lead.js` (Cloudflare). Обидві відповідають на `/api/lead`.

### 3. Адмінка
**app.pagescms.org** → Sign in with GitHub → дайте доступ до `vas-instalater`. Меню: Контакти та основне, Тексти сайту, Про мене, Послуги, Прайс, Роботи до/після, Відгуки, Часті питання, Юридичні сторінки.

### 4. Заявки на email
web3forms.com → вкажіть email → скопіюйте ключ → адмінка: Контакти → «Ключ Web3Forms».

### 5. Заявки в Telegram
1. У Telegram напишіть **@BotFather** → `/newbot` → придумайте назву → отримаєте **токен**.
2. Напишіть своєму новому боту будь-яке повідомлення.
3. Відкрийте в браузері `https://api.telegram.org/botТОКЕН/getUpdates` і знайдіть `"chat":{"id":123456789` — це ваш **chat id**.
4. Netlify → ваш сайт → **Site configuration → Environment variables** → додайте `TG_BOT_TOKEN` (позначте **Contains secret values**) і `TG_CHAT_ID`.
   (На Cloudflare: Settings → Variables and Secrets.)
5. Netlify → **Deploys → Trigger deploy → Deploy site**, щоб змінні запрацювали.

Можна підключити тільки email, тільки Telegram або обидва. Заявка вважається надісланою, якщо спрацював хоча б один спосіб.

### 6. Статистика (Umami, безкоштовний тариф Hobby)
1. cloud.umami.is → зареєструйтеся → Add website → `vasinstalater.cz`.
2. Скопіюйте **Website ID** → адмінка: Контакти → «Umami Website ID».
3. У звіті Umami → Events ви побачите натискання: `tel-hero`, `tel-header`, `tel-callbar`, `whatsapp-…` і надіслані заявки `lead-sent`.

Umami не використовує cookies, тому банер про cookies не потрібен. Пункт про Umami в GDPR зʼявляється автоматично.

---

## Перед запуском обовʼязково
- **Reklamační řád і GDPR** — це шаблони, а не юридична консультація. Заповніть гарантію, дату й свої дані. Якщо можете, покажіть їх бухгалтеру чи юристу.
- У «Юридичні сторінки» → «Сервіси» приберіть Telegram, якщо не підключали його, і впишіть свого поштового провайдера.
- Якщо не говорите англійською, залиште вимкненим «Я говорю англійською». Тоді англійська версія напише, що можна писати англійською, а говорите ви чеською, українською й російською.
- Надішліть собі тестову заявку з кожної мови.

## Поради
- **Тексти сайту** — головний заголовок, кнопки, кроки, назва й опис для Google окремо для кожної мови. Якщо очистити поле, повернеться стандартний текст.
- Через адмінку **не змінюються**: основний текст GDPR і reklamační řád, дрібні службові підписи (`src/_data/t.js`), кольори й дизайн.
- **Адресу сторінки послуги** (`slug`) після запуску краще не змінювати, бо Google вже знатиме стару.
- **Нову послугу** додаєте в адмінці «Послуги» — її сторінки трьома мовами створяться автоматично.
- **Ціни** пишіть числом (`590`), а «od / від / from» і «Kč» сайт додасть сам.
- **Відгуки** — тільки справжні.

## Перегляд на своєму компʼютері
```
npm install
npm start
```
Відкрийте http://localhost:8080. Відправка у Telegram локально не працює, вона діє тільки на Netlify або Cloudflare.
