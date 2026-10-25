# nanokernel-landing

Маркетинговый сайт pro-flow: лендинг, позже — страницы сфер, сравнения и блог.
Astro, статический HTML (SEO и AI-поисковики видят весь контент без JS), интерактив — ванильные `<script>`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

- `src/config.ts` — цена, триал, домены. Факты сверять с `../sales-knowledge-base/pro-flow-knowledge-base.md`.
- `src/data/faq.ts` — FAQ: и блок на странице, и JSON-LD `FAQPage`.
- `src/components/ChatDemo.astro` — демо ассистента с трейсом «как думает». Сейчас локальный сценарий
  на вымышленных данных; дальше — публичный демо-эндпоинт ядра с лимитами.
- `public/robots.txt`, `public/llms.txt` — открыты для поисковых и AI-ботов.

TODO до запуска: домен (`SITE_URL`, `APP_URL`, robots/llms), og-картинка `public/og.png`,
kk/en версии + `hreflang`, юр. страницы, аналитика (Метрика/GA через Partytown), cookie-баннер.
