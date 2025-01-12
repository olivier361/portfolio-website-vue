# portfolio-website-vue

This repository hosts the code for my personal portfolio website. The project is built using [Vue.js 3](https://vuejs.org/) and [Vite](https://vite.dev/).

## Project Setup

### Requirements
- Node.js v20 (lts/iron)
  - It is recommended to [install Node](https://nodejs.org/en/download) using `NVM`
- NPM (latest version)
- Development on WSL / Ubuntu for consistency (recommended)

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with the following extensions:
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Running the Project
After cloning the repository and setting up your develoment environment as described above, you must first install all `node_modules` before you can run the development server:

```sh
npm install
```
**IMPORTANT**: You can find all supported `npm scripts` for the project in `/package.json`.
### Compile and Hot-Reload for Development

```sh
npm run dev
```
NOTE: By default, the development version of the website should be available at [http://localhost:5173](http://localhost:5173).

### Compile and Minify for Production

```sh
npm run build
npm run preview # to view the prod version locally
```
NOTE: The resulting production ready files will be located in the `/dist` folder.

## Running the Test Suite
This project includes suites for unit, component, and End-to-End (E2E) tests in addition to code linting.

These tests also run automatically as GitHub CI Workflows on PRs and during code merges to core branches. (See: `/.github/workflows` for all CI workflow files.)

### Run Unit & Component Tests ([Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/))

```sh
# run both unit and component tests
npm run test

# run unit tests
npm run test:unit

# run component tests
npm run test:component

# update component test snapshots
npm run test:update-snapshots

# run coverage report for unit & component tests
npm run test:coverage
```
NOTE: Unit and component tests can also be run in `watch mode` where tests are re-run as you make code changes. (EX: `npm run test:unit:watch`)

### Run End-to-End Tests ([Playwright](https://playwright.dev/))
Unlike the other tests which run code in isolation, Playwright E2E tests are run inside a browser on the full website project.

```sh
# run E2E tests in CLI
npm run test:e2e

# run E2E tests in UI mode
npm run test:e2e:ui

# update e2e image snapshots
npm run test:e2e:update-snapshots

# more commands:
npx playwright test --project=chromium # Runs the tests only on Desktop Chrome.
npx playwright test fileName # Runs the tests in a specific file.
npx playwright test --debug # Runs the tests in debug mode.
npx playwright codegen # generate tests by interacting with a browser.
```
NOTE: `UI Mode` provides an interactive UI to run and review the results of tests with detailed step-by-step breakdowns. The `Playwright VS Code extension` can also be used to run tests directly from your IDE and add breakpoints in the code.

### Run Code Linting ([ESLint](https://eslint.org/))

```sh
npm run lint
```
NOTE: With the `ESLint VS Code extension` you can have ongoing code linting in your IDE.

## Additional Documentation
- [Vite Configuration Reference](https://vitejs.dev/config/).