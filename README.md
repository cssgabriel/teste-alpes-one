# Rode o projeto em sua máquina

1. Faça o clone deste repositório

```
https://cssgabriel-teste-alpes-one.git
```

2. Rode o comando `npm install` e em seguida `npm run dev`

# Deploy

Não utilizei o GitHub Pages, tive um problema com o deploy e como não queria demorar para entregar o teste optei por outra opção. Por isso, fiz pelo Netlify.

- [Acessar site](https://cssgabriel-teste-alpes-one.netlify.app/)

# Tecnologias usadas

> HTML
> CSS
> JavaScript
> SASS
> React
> TypeScript

- **Porque fiz essa escolha?**

Aproveitei para usar React + TypeScript + SASS por que assim eu poderia demonstrar meu conhecimento tanto em HTML/CSS (SASS) e JavaScript. Bem como, também sobre componentização.

Apesar de não utilizar GULP com tanta frequência, também sei o básico sobre.

# Espero que gostem

Sei que talvez ficaram alguns pequenos detalhes para trás, mas eu decidi optar por ser o mais ágil possível e realizar a entrega.

Qualquer dúvida fico à disposição.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
