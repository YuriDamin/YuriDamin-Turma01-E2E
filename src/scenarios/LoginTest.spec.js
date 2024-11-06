const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('OrangeHRM Login Test', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login('Admin', 'admin123');

        await loginPage.verifyLoginSuccess();
    });
});
