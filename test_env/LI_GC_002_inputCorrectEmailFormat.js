const puppeteer = require('puppeteer');
const expect = require('chai').expect;
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());


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
    await username.type("poetraphotograf@gmail.com", { delay: 100 });

    // 4.	Click button “Selanjutnya”
    await page.waitForTimeout(2000);
    await page.click('#email-phone-submit');

    // 5.   Select Other Method
    await page.waitForTimeout(2000);
    await page.click('#password-input');

    // 6.   Input Password
    await page.waitForTimeout(2000);
    await username.type('bismillah21193', { delay: 100 });

    // 7.   Submit
    await page.waitForTimeout(2000);
    await page.click('[aria-label="login-button"]');
    await page.screenshot({ path: 'ss_test/LI_GC_002_inputCorrectEmailFormat.png' });


    await browser.close();
})();