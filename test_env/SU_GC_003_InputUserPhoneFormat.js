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

    // 3.	Input Manual with correct format phone number registered
    const username = await page.$("#regis-input");
    await page.waitForTimeout(3000);
    await username.type("087877996114", { delay: 100 });

    // 4.	Click Button Daftar / Sign Up
    await page.waitForTimeout(5000);
    await page.$('[data-testid="phone-email-submit"]')
    await page.click((`[data-testid="phone-email-submit"]`));

    // Screenshot
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'ss_test/SU_GC_003_InputUserPhoneFormat_1.png' });

    // verify output
    let element = await page.$("[data-testid='confirmation-dialog']");
    let Message = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(3000);

    expect(Message).to.be.equal(
        "Nomor HP Sudah TerdaftarLanjut masuk dengan nomor ini  0878-7799-6114?Ya, MasukUbah"
    );

    // 5.	Show confirmation Pop up window : Click Yes / Ya, Masuk
    await page.$(`[data-testid="confirmation-primary-button"]`);
    await page.click((`[data-testid="confirmation-primary-button"]`));
    await page.waitForTimeout(2000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_003_InputUserPhoneFormat_2.png' });

    await browser.close();
})();