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
    await page.waitForTimeout(2000);

    // 3.	Input Manual with wrong format phone number > 15 number
    const username = await page.$("#regis-input");
    await page.waitForTimeout(2000);
    await username.type("1234567890123456", { delay: 100 });

    // verify output
    await page.waitForTimeout(2000);
    let element = await page.$(".ed3tosx7");
    let ErrMessage = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(2000);

    expect(ErrMessage).to.be.equal(
        "Nomor ponsel terlalu panjang, maksimum 15 angka"
    );

    // verify button disabled
    await page.waitForTimeout(2000);
    let link = await page.$eval(".css-1d60za6-unf-btn",
        element => element.disabled);
    expect(link).to.be.equal(
        true
    );
    await page.waitForTimeout(1000);

    // Screenshot
    await page.screenshot({ path: "ss_test/SU_BC_003_InputUserPhoneFormat.png" });
    await page.waitForTimeout(5000);

    await browser.close();
})();