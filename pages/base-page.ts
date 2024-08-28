import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  // Navbar
  readonly loginRegisterLink: Locator;
  readonly specialLink: Locator;
  readonly cartLink: Locator;
  readonly checkoutLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly logoImage: Locator;

  //Footer
  readonly privacyPolicyLink: Locator;
  readonly returnPolicyLink: Locator;
  readonly shippingLink: Locator;
  readonly contactUsLink: Locator;
  readonly siteMapLink: Locator;
  readonly loginLink: Locator;

  textLink: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  setTextLink(text: string) {
    this.textLink = this.page.locator('a', { hasText: text });
  }

  async clickTextLink(text: string) {
    this.setTextLink(text);
    await this.textLink.click();
  }
}