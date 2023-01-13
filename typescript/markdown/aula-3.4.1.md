# 3.4.1 – Conceitos sobre TypeScript

## INSTALAÇÃO:

```
npm install typescript
```

```
tsc --version
```

Para gerar o package.json:
```
npm init
```

Para gerar o tsconfig.json:
```
npx tsc --init
```
```
"target": "es6",
"module": "ESNext",
"outDir": "./src/build",
```

```
npm run test
```

```
tsc
```

```
tsc index.ts
```

Para compilar um arquivo específico separado para um diretório diferente
```
tsc nomeDoArquivo.ts outDir nomeDaPasta
```

```
node index.js
```

outDir: Local onde os arquivos compilados devem ser inseridos

rootDir: diretório raiz dos arquivos ts a serem compilados

Obs: Caso não esteja definido o rootDir e os arquivos ts estejam em diretórios diferentes a compilação será executada recriando estes diretórios.
## Arquivos usados em aula:

[codigos](/typescript/codigos)