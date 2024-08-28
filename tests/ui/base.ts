import {test as base} from "@playwright/test";
import { HomePage } from "../../pages/home-page";
import { LoginPage } from "../../pages/login-page";

type Fixtures = {
  homePage: HomePage,
  loginPage: LoginPage
}

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  }
})

export { expect } from "@playwright/test"