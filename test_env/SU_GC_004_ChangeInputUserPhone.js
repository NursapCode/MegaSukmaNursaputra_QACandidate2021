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

    // 3.	Input Manual with correct format email
    const username = await page.$("#regis-input");
    await page.waitForTimeout(3000);
    await username.type("asdfg@gmail.com", { delay: 100 });
    await page.waitForTimeout(5000);

    // 4.	Click Button Daftar / Sign Up
    await page.$('[data-testid="phone-email-submit"]')
    await page.click((`[data-testid="phone-email-submit"]`));
    await page.waitForTimeout(3000);

    // verify output
    let element = await page.$("[data-testid='confirmation-dialog']");
    let Message = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(3000);

    expect(Message).to.be.equal(
        "Email Sudah TerdaftarLanjut masuk dengan email ini  asdfg@gmail.com?Ya, MasukUbah"
    );

    // 5.	Show confirmation Pop up window : Click Change / Ubah
    await page.$(`[data-testid="confirmation-secondary-button"]`);
    await page.click((`[data-testid="confirmation-secondary-button"]`));
    await page.waitForTimeout(2000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_004_ChangeInputUserPhone1.png' });
    await page.waitForTimeout(3000);

    // 6.	Back to step 3 to edit email
    await page.$("#regis-input");
    await page.waitForTimeout(1000);
    await username.click({ clickCount: 15 });
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(3000);
    await username.type("zxcvb@gmail.com", { delay: 100 });
    await page.waitForTimeout(5000);

    // 7.	Submit
    await page.$('[data-testid="phone-email-submit"]')
    await page.click((`[data-testid="phone-email-submit"]`));
    await page.waitForTimeout(3000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_004_ChangeInputUserPhone2.png' });

    // verify output
    element = await page.$("[data-testid='confirmation-dialog']");
    Message = await page.evaluate((el) => el.textContent, element);
    await page.waitForTimeout(3000);

    expect(Message).to.be.equal(
        "zxcvb@gmail.comApakah email yang Anda masukkan sudah benar?Ya, BenarUbah"
    );

    // 8.	Go to verification method page
    await page.$(`[data-testid="confirmation-primary-button"]`);
    await page.click((`[data-testid="confirmation-primary-button"]`));
    await page.waitForTimeout(2000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_004_ChangeInputUserPhone3.png' });

    await browser.close();
})();