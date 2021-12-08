// const { assert } = require('console');
const puppeteer = require("puppeteer");
const { stringify } = require("querystring");
const expect = require("chai").expect;

(async function inputUserName() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });
    const page = await browser.newPage();

    // 1.	Open tokopedia.com
    await page.goto("https://tokopedia.com");
    await page.waitForTimeout(3000);

    // 2.	Select Menu Daftar/Sign Up
    await page.click(".css-t0ond8");
    await page.waitForTimeout(3000);

    // 3.	Input Manual with wrong format email with double @
    const username = await page.$("#regis-input");
    await page.waitForTimeout(5000);
    await username.type("asdfg@@gmail.com", { delay: 100 });

    // 4.	Can’t click Button Daftar / Sign Up
    await page.waitForTimeout(2000);
    link = await page.$eval(".css-1d60za6-unf-btn",
        element => element.disabled);
    expect(link).to.be.equal(
        true
    );
    await page.waitForTimeout(1000);

    // verify output
    let element = await page.$(".ed3tosx8");
    let Message = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(3000);
    expect(Message).to.be.equal(
        "Format email salah"
    );

    // Screenshot
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'ss_test/SU_BC_005_InputUserPhoneFormat1.png' });

    // 5.	Delete Phone number + alphabet
    await page.waitForTimeout(3000);
    await page.$("#regis-input");
    await page.waitForTimeout(1000);
    await username.click({ clickCount: 9 });
    await page.keyboard.press('Backspace');

    // 6.	Input Manual with wrong format email change “.com” to “,com”
    await page.waitForTimeout(3000);
    await username.type("asdfg@gmail,com", { delay: 100 });

    // 7.	Can’t click Button Daftar / Sign Up
    await page.waitForTimeout(2000);
    link = await page.$eval(".css-1d60za6-unf-btn",
        element => element.disabled);
    expect(link).to.be.equal(
        true
    );
    await page.waitForTimeout(1000);

    // verify output
    element = await page.$(".ed3tosx8");
    Message = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(3000);

    expect(Message).to.be.equal(
        "Format email salah"
    );

    // Screenshot
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'ss_test/SU_BC_005_InputUserPhoneFormat2.png' });

    await browser.close();
})();