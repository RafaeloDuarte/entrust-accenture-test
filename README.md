<<<<<<< HEAD
# Teste Técnico — Frontend Developer | Pixelboom

Este projeto é um teste técnico para a vaga de **Frontend Developer** na empresa **Pixelboom**. O principal objetivo é replicar com fidelidade o layout fornecido via Figma, respeitando os detalhes visuais, componentes e a usabilidade esperada.

## 🔗 Link do Figma

O design deste projeto está baseado no seguinte arquivo do Figma:

[🎨 Design no Figma](https://www.figma.com/design/TOALrzlKsyYKDhWIIvysNI/Teste-Frontend-Developer?node-id=1-1360&t=zoYTynQ9P2ZK3o2n-0)

---

## 🛠️ Tecnologias utilizadas

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide Icons](https://lucide.dev/)
* [Sonner (toast)](https://sonner.emilkowal.ski/)
* Componentes customizados com base em [ShadCN/UI](https://ui.shadcn.dev)
* [Husky](https://typicode.github.io/husky/) – Git hooks para automações
* [Vitest](https://vitest.dev/) – Testes unitários rápidos e modernos
* [Playwright](https://playwright.dev/) – Testes end-to-end com foco em performance

---

## 📦 Instalação e execução local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Rode o projeto
npm run dev
````

A aplicação estará disponível em:
📍 `http://localhost:5173`

---

## 🚀 Deploy

Este projeto pode ser facilmente publicado na [Netlify](https://netlify.com), utilizando as configurações:

* **Build Command:** `npm run build`
* **Publish Directory:** `dist`

---

## 📚 Funcionalidades

* ✅ Menu lateral
* ✅ Adicionar novo usuário via drawer lateral
* ✅ Validação e persistência temporária em memória
* ✅ Feedback visual com toast ao adicionar um usuário
* ✅ Contagem dinâmica de usuários ativos/inativos
* ✅ Scroll controlado com `ScrollArea`
* ✅ Paginação visual e filtros (placeholders)
* ✅ Total aderência ao layout proposto no Figma

---

## 🧪 Observações

* O foco foi na fidelidade ao design, não na persistência real de dados.
* Não há conexão com backend.
* Formulários podem ser adaptados para integração com APIs REST ou GraphQL futuramente.
* Responsividade parcial implementada — otimizado para desktop (resolução do layout original).

---

## 🤝 Agradecimentos

Obrigado à equipe da **Pixelboom** pela oportunidade de participar do processo seletivo e mostrar minhas habilidades práticas com base em um design real.

---

## 📄 Licença

Este projeto é de uso exclusivo para avaliação técnica e não possui licença de uso comercial.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 1d34927 (chore: criar projeto Vite + React + Typescript e setup do husky e prettier lint)
