const { test, expect } = require('@playwright/test');

test('Teste de login no OrangeHRM', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'admin123');

  await page.click('button[type="submit"]');

  await page.waitForURL(
    'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  );

  const dashboardElement = await page.isVisible('elemento_do_dashboard');
  expect(dashboardElement).toBeTruthy();
});
