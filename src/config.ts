// Single place for facts the site states. Keep in sync with
// sales-knowledge-base/pro-flow-knowledge-base.md — the landing must not promise more.

export const BRAND = "pro-flow";

// TODO: real domains and contacts before launch.
export const SITE_URL = "https://pro-flow.kz";
export const APP_URL = "https://app.pro-flow.kz";
export const SIGNUP_URL = `${APP_URL}/register`;
export const CONTACT_URL = "#start";
// Our own sales assistant, built on pro-flow itself. TODO: real @username.
export const SALES_BOT_URL = "https://t.me/proflow_bot";

export const PRICE = {
  monthly: 25000,
  currency: "KZT",
  perDay: 850,
  trialDays: 7,
  trialReplies: 500,
  trialVoice: 30,
};

export const formatTenge = (n: number) =>
  `${new Intl.NumberFormat("ru-RU").format(n).replace(/ /g, " ")} ₸`;
