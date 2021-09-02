# Frontend project Boilerplate

My personal boilerplate for frontend projects

## Requirements
* Node.JS 14.15.3+;
* Yarn 1.22.11+;
* Gulp CLI 2.3.0+;

## Revert from scratch

Install all dependencies:
```bash
yarn install
```

Build in development mode:
```bash
yarn run build-dev
```

Or build in production mode:
```bash
yarn run build
```

## Generators

Boilerplate provides code generation for React components and Redux Store items.

### React components generator

Command:

```bash
yarn run generate-component <ComponentName> [--behavior]
```

Parameters:

`componentName` - name of component in `PascalCase`;
`--behavior` -- adds common hook (`useBehavior`) to define all behavior of the component;

### Redux Store item generator

Command:

```bash
yarn run generate-store-item <itemName>
```

Parameters:

`itemName` - name of store item in `camelCase`;
