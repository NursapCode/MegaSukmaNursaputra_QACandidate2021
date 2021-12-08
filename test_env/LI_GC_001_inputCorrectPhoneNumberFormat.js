const puppeteer = require('puppeteer');
const expect = require('chai').expect;


// const assert = chai.assert;

(async function loginTest() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();

    // 1.   Open tokopedia.com
    await page.goto('https://tokopedia.com');

    // 2.   Select Menu Masuk / Log in
    await page.waitForTimeout(2000);
    await page.$('[data-testid="btnHeaderLogin"]')
    await page.click((`[data-testid="btnHeaderLogin"]`));

    // 3. 	Input user log in with data test.
    await page.waitForTimeout(2000);
    let username = await page.$('#email-phone');
    await page.waitForTimeout(2000);
    await username.type("087877996114", { delay: 100 });

    // 4.	Click button “Selanjutnya”
    await page.waitForTimeout(2000);
    await page.click('#email-phone-submit');
    await page.screenshot({ path: 'ss_test/LI_GC_001_inputCorrectPhoneNumberFormat_1.png' });

    // 5.   Back
    await page.waitForTimeout(2000);
    await page.$('[aria-label="back"]')
    await page.click((`[aria-label="back"]`));

    // 6. 	Input user log in with data test.
    await page.waitForTimeout(2000);
    username = await page.$('#email-phone');
    await page.waitForTimeout(2000);
    await username.type("+628787799114", { delay: 100 });

    // 7.	Click button “Selanjutnya”
    await page.waitForTimeout(2000);
    await page.click('#email-phone-submit');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'ss_test/LI_GC_001_inputCorrectPhoneNumberFormat_2.png' });

    await browser.close();
})();