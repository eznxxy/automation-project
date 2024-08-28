import { test, expect } from "./base";

test('User login using invalid credential', async ({ homePage, loginPage }) => {
  await test.step('Navigate to login page', async () => {
    await homePage.goto();
    await homePage.clickTextLink('Login or register');
    await expect(loginPage.page).toHaveURL(/.*login/);
  });

  await test.step('Login into website', async () => {
    await loginPage.login('dummyjohndoe', 'dummy1234');
    await expect(loginPage.page).toHaveURL(/.*account\/login/);
  });

  await test.step('Assert error message', async () => {
    await expect(loginPage.incorectLoginError).toBeVisible();
  });
});

test('User login using valid credential', async ({ homePage, loginPage }) => {
  await test.step('Navigate to login page', async () => {
    await homePage.goto();
    await homePage.clickTextLink('Login or register');
    await expect(loginPage.page).toHaveURL(/.*login/);
  });

  await test.step('Login into website', async () => {
    await loginPage.login('dummyjohndoe', 'dummy123');
    await expect(loginPage.page).toHaveURL(/.*account\/account/);
  });

  await test.step('Navigate to account details', async () => {
    await loginPage.clickNavigationLink('Edit account details');
    await expect(loginPage.page).toHaveURL(/.*account\/edit/);
  });

  await test.step('Assert login name', async () => {
    await expect(loginPage.loggedUser).toBeVisible();
  });
});