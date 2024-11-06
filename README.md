# Playwright E2E

## GitHub Actions

[![Build and Tests](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_playwright-e2e&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_playwright-e2e)

## Introdução
Para executar este projeto, siga os passos abaixo:

Instale o Node JS (versão >= 20.x)
Execute npm i --save-dev para instalar todas as dependências do projeto
Execute npx playwright install para instalar os navegadores usados pelo Playwright
Execute npm run ci para executar toda a suíte de testes
Execute npm run show-report para visualizar os relatórios
Todos os artefatos de execução podem ser encontrados em ./artifacts. Caso queira remover esses arquivos, execute npm run clean