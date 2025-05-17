# 📈 Binance Live Price Tracker

Uma mini aplicação moderna para **monitoramento em tempo real** de preços da Binance via WebSocket.

![Screenshot](./public/screenshot.png) <!-- opcional se quiser adicionar depois -->

---

## ✨ Funcionalidades

- 🔍 **Busca de ativos (símbolos)** com filtro dinâmico
- 💾 **Lista personalizada de símbolos favoritos**
- 🔄 **Atualização ao vivo via WebSocket**
- 📉 Exibição de:
  - Último preço (`lastPrice`)
  - Melhor oferta de compra (`best bid`)
  - Melhor oferta de venda (`best ask`)
  - Variação percentual de preço nas últimas 24h

---

## Deploy feito no netlify

App em produção disponível no link
https://silly-chebakia-68702f.netlify.app/

---

## 🧠 Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ShadCN UI](https://ui.shadcn.dev/) (UI moderna baseada em Tailwind + Radix UI)
- [Tailwind CSS](https://tailwindcss.com/)
- [Binance API](https://binance-docs.github.io/apidocs/spot/en/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- [Playwright](https://playwright.dev/) (E2E)

---

## 🚀 Instalação

```bash
git clone https://github.com/seu-usuario/binance-tracker.git
cd binance-tracker
npm install
