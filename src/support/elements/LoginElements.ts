import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="username"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('input[name="password"]');
  }

  getBotaoLogin(): Locator {
    return this.page.locator('button[type="submit"]');
  }
}
