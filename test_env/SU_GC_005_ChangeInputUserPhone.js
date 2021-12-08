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
    await username.type("12345678", { delay: 100 });

    // 4.	Click Button Daftar / Sign Up
    await page.waitForTimeout(5000);
    await page.$('[data-testid="phone-email-submit"]')
    await page.click((`[data-testid="phone-email-submit"]`));
    await page.waitForTimeout(3000);

    // verify output
    let element = await page.$("[data-testid='confirmation-dialog']");
    let Message = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(3000);

    expect(Message).to.be.equal(
        "Nomor HP Sudah TerdaftarLanjut masuk dengan nomor ini  1234-5678?Ya, MasukUbah"
    );

    // 5.	Show confirmation Pop up window : Click Change / Ubah
    await page.$(`[data-testid="confirmation-secondary-button"]`);
    await page.click((`[data-testid="confirmation-secondary-button"]`));
    await page.waitForTimeout(2000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_005_ChangeInputUserPhone1.png' });

    // 6.	Back to step 3 to edit phone number
    await page.waitForTimeout(3000);
    await page.$("#regis-input");
    await page.waitForTimeout(1000);
    await username.click({ clickCount: 8 });
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(3000);
    await username.type("87654321", { delay: 100 });
    await page.waitForTimeout(5000);

    // 7.	Submit
    await page.$('[data-testid="phone-email-submit"]')
    await page.click((`[data-testid="phone-email-submit"]`));
    await page.waitForTimeout(3000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_005_ChangeInputUserPhone2.png' });

    // verify output
    element = await page.$("[data-testid='confirmation-dialog']");
    Message = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(3000);

    expect(Message).to.be.equal(
        "8765-4321Apakah nomor HP yang Anda masukkan sudah benar? Ya, BenarUbah"
    );

    // 8.   Go to verification method page
    await page.$(`[data-testid="confirmation-primary-button"]`);
    await page.click((`[data-testid="confirmation-primary-button"]`));
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'ss_test/SU_GC_005_ChangeInputUserPhone3.png' });

    await browser.close();
})();