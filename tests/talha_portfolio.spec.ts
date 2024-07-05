import { test, expect } from "@playwright/test";
import exp from "node:constants";
import { beforeEach, describe } from "node:test";

test("correct URL pointed", async ({ page }) => {
  await page.goto("https://mtalham.netlify.app/");

  await expect(page).toHaveURL("https://mtalham.netlify.app/");
});

test("correct title of page", async ({ page }) => {
  await page.goto("https://mtalham.netlify.app/");

  await expect(page).toHaveTitle("Muhammad Talha | Portfolio");
});

test("position moved to overview heading correctly", async ({ page }) => {
  await page.goto("https://mtalham.netlify.app/");

  let xpathofmousebutton: string =
    '//*[@id="root"]/div[2]/div[1]/section/div[3]/a';
  await page.locator(`xpath=${xpathofmousebutton}`).click();

  // Wait for the URL to include #about
  await expect(page).toHaveURL("https://mtalham.netlify.app/#about");

  // Expect the "Overview" heading to be visible
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
});

test("position moved to work experience heading correctly", async ({
  page,
}) => {
  await page.goto("https://mtalham.netlify.app/");

  let xpathofworklink: string =
    '//*[@id="root"]/div[2]/div[1]/nav/div/ul/li[2]/a';
  await page.locator(`xpath=${xpathofworklink}`).click();

  // Expect the URL to change to the section with the ID "work"
  await expect(page).toHaveURL("https://mtalham.netlify.app/#work");

  // Expect the "Work Experience" heading to be visible
  await expect(
    page.getByRole("heading", { name: "Work Experience" })
  ).toBeVisible();
});
