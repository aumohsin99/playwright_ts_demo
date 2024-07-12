import { test, expect } from "@playwright/test";
import exp from "node:constants";
import { randomInt } from "node:crypto";
import { beforeEach, describe } from "node:test";
//import {Math} from
//import {Math} from randomInt

//variables
let xpathofabout: string = '//*[@id="root"]/div[2]/div[1]/nav/div/ul/li[1]/a';
let xpathofaboutmousebutton: string =
  '//*[@id="root"]/div[2]/div[1]/section/div[3]/a';
let xpathofwork: string = '//*[@id="root"]/div[2]/div[1]/nav/div/ul/li[2]/a';
let xpathofcontact: string = '//*[@id="root"]/div[2]/div[1]/nav/div/ul/li[3]/a';
let xpathofprojectscontainer: string =
  '//*[@id="root"]/div[2]/section[4]/div[3]';
//*[@id="root"]/div[2]/section[4]/div[3]

test("correct URL pointed and page title displayed", async ({ page }) => {
  await page.goto("https://mtalham.netlify.app/");

  await expect(page).toHaveURL("https://mtalham.netlify.app/");
  await expect(page).toHaveTitle("Muhammad Talha | Portfolio");
});

test("position moved to overview/about heading correctly using navbar link", async ({
  page,
}) => {
  await page.goto("https://mtalham.netlify.app/");

  await page.locator(`xpath=${xpathofabout}`).click();

  // Wait for the URL to include #about
  await expect(page).toHaveURL("https://mtalham.netlify.app/#about");

  // Expect the "Overview" heading to be visible
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
});

test("position moved to overview/about heading correctly using mouse button", async ({
  page,
}) => {
  await page.goto("https://mtalham.netlify.app/");

  await page.locator(`xpath=${xpathofaboutmousebutton}`).click();

  // Wait for the URL to include #about
  await expect(page).toHaveURL("https://mtalham.netlify.app/#about");

  // Expect the "Overview" heading to be visible
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
});

test("position moved to work experience heading correctly using navbar link", async ({
  page,
}) => {
  await page.goto("https://mtalham.netlify.app/");

  await page.locator(`xpath=${xpathofwork}`).click();

  // Expect the URL to change to the section with the ID "work"
  await expect(page).toHaveURL("https://mtalham.netlify.app/#work");

  // Expect the "Work Experience" heading to be visible
  await expect(
    page.getByRole("heading", { name: "Work Experience" })
  ).toBeVisible();
});

test("position moved to contact heading correctly using navbar link", async ({
  page,
}) => {
  await page.goto("https://mtalham.netlify.app/");

  await page.locator(`xpath=${xpathofcontact}`).click();
  await expect(page).toHaveURL("https://mtalham.netlify.app/#contact");
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});

test("scrolled down to projects, random project link clicked and site is opened", async ({
  page,
}) => {
  await page.goto("https://mtalham.netlify.app/");
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();

  function getRandomInt(): number {
    let minind: number = 0;
    let maxind: number = 5;
    return Math.floor(Math.random() * (maxind - minind + 1)) + minind;
  }

  let indexofproject: number = getRandomInt();
  //randomInt(min:0 , max:5);

  console.log("random number generated: ", indexofproject);

  let livesitelinkofrandomproject: string = `//*[@id="root"]/div[2]/section[4]/div[3]/div[${indexofproject}]/div/div[1]/div/div[1]`;

  //await page.getByRole("link", { name: livesitelinkofrandomproject }).click();
  await page.locator(`xpath=${livesitelinkofrandomproject}`).click();
});
