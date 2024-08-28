import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly headerFeaturedText: Locator;

  constructor(page: Page) {
    super(page);
    this.headerFeaturedText = page.getByText('Featured');
  }

  async goto() {
    await this.page.goto('/');
  }
}