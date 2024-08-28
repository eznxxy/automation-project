import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly loginHeader: Locator;
  readonly loginNameInput: Locator;
  readonly passwordInput: Locator;
  readonly forgotPasswordLink: Locator;
  readonly forgotLoginLink: Locator;
  readonly loginButton: Locator;

  readonly incorectLoginError: Locator;

  constructor(page: Page) {
    super(page);
    this.loginHeader = page.locator('span', { hasText: 'Account Login' });
    this.loginNameInput = page.locator('#loginFrm_loginname');
    this.passwordInput = page.locator('#loginFrm_password');
    this.forgotPasswordLink = page.locator('a', { hasText: 'Forgot your password?' });
    this.forgotLoginLink = page.locator('a', { hasText: 'Forgot your login?' });
    this.loginButton = page.getByTitle('Login');
    this.incorectLoginError = page.getByText('Incorrect login or password provided.')
  }

  loggedUser: Locator;
  accountNavigationLink: Locator

  async goto() {
    await this.page.goto('/index.php?rt=account/login');
    await expect(this.page).toHaveURL(/.*login/);
  }

  async login(login: string, password: string) {
    await this.loginNameInput.fill(login);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    this.setLoggedUser(login);
  }

  setLoggedUser(name: string) {
    this.loggedUser = this.page.getByText(`Login Name: ${name}`);
  }

  setAccountNavigationLink(text: string) {
    this.accountNavigationLink = this.page.getByRole('link', { name: text });
  }

  async clickNavigationLink(text: string) {
    this.setAccountNavigationLink(text);
    await this.accountNavigationLink.click();
  }
}