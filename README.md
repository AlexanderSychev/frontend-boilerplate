# Frontend project Boilerplate

My personal boilerplate for frontend projects

## Requirements
* Node.JS 12.17.0+
* GNU Make 4.2.1+
* Yarn 1.22.4+

## Revert from scratch

Install all dependencies:
```bash
yarn install
```

Build in development mode:
```bash
yarn build-dev
```

Or build in production mode:
```bash
yarn build
```

## Generators

Boilerplate provides code generation for React components and Redux Store items.

### React components generator

Command:

```bash
yarn generate-component <ComponentName> [--behavior]
```

Parameters:

`componentName` - name of component in `PascalCase`;
`--behavior` -- adds common hook (`useBehavior`) to define all behavior of the component;

### Redux Store item generator

Command:

```bash
yarn generate-store-item <itemName>
```

Parameters:

`itemName` - name of store item in `camelCase`;
