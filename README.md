# React Native template

Este projeto foi criado com a intenção de criar um template configurado e pronto para uso de qualquer aplicação. Ele vem com TypeScript, duas bibliotecas muito utilizadas no React-Native e uma lista de recomendações de outras bibliotecas.

## O que foi feito?
- Foi resolvido o problema que ocorre quando iniciamos um novo projeto e o emulador não gera nada em tela quando abrimos o app, apenas uma tela branca. Para resolver esse problema foi preciso entrar em `android/app/src/main` e criar uma pasta chamada assets. Logo em seguida foi executando o comando abaixo na raiz do projeto.
```bash 
$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```
- Foi configurado o eslint, prettier e editorconfig (é recomendado ter a extensão dessas três ferramentas no VSCode).

- Foi instalado as bibliotecas: `styled-components` e `react-native-vector-icons`.

## Pré-requisitos

Tenha instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Android Studio](https://developer.android.com/studio),
Opcionalmente pode-se instalar o [Yarn](https://yarnpkg.com/) como gerenciador de pacotes.

## Rodando a aplicação

```bash
# Instale as dependências
$ yarn
ou
$ npm install

# Comece o servidor de desenvolvimento com o comando
$ yarn start
ou
$ npx react-native start

# Rode a aplicação com o comando
$ yarn android
ou
$ npx react-native run-android
```

```bash
# Responsável por varrer todos os arquivos da aplicação, aplicando correção de indentação.
$ yarn fix:code
ou
$ npx prettier --write **/*.{js,jsx,ts,tsx,json} && npx prettier --write *.{js,jsx,ts,tsx,json}

# Responsável por atualizar as dependências.
$ yarn update:package
ou
$ npx npm-check-updates -u
```

## Android - Gerando APK e/ou AAB

1- Crie ou adicione a chave do aplicativo na pasta ```android/app``` <br />
2- Configure as informações da sua chave no arquivo ```gradle.properties``` em ```android/gradle.properties``` <br />
3- Rode o comando: <br />
```bash
# APK
$ yarn apk
ou 
$ cd android && ./gradlew assembleRelease && cd ..

# AAB
$ yarn aab
ou
$ cd android && ./gradlew bundleRelease && cd ..
```

Obs: Se não tiver experiência em gerar chaves ou controle de versão no Android, recomendo a leitura deste post [Gerando aab e apk para Android no React Native](https://www.notion.so/Gerando-aab-apk-para-android-no-React-Native-1703c2d965bc4354ade328ae146d176e)

## Dicas de bibliotecas
- [react-navigation](https://reactnavigation.org/) - realiza navegação dentro do app.
- [axios](https://github.com/axios/axios) - realiza chamas à API.
- [react-query](https://react-query.tanstack.com/) - utiliza cache nas chamadas à API.
- [react-hook-form](https://react-hook-form.com/) - controla de formularios.
- [yup](https://github.com/jquense/yup) - valida de formularios.
- [react-native-modal](https://github.com/react-native-modal/react-native-modal) - cria modals.
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) - guarda valores na cache do celular.
