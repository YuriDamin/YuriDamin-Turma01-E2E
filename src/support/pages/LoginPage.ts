import { expect, Page } from '@playwright/test';

class LoginPage {
  page: Page;
  usernameInput;
  passwordInput;
  loginButton;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#txtUsername');
    this.passwordInput = page.locator('#txtPassword');
    this.loginButton = page.locator('#btnLogin');
  }

  async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('#welcome')).toBeVisible();
  }
}

export { LoginPage };
