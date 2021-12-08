const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const { stringify } = require("querystring");

// const assert = chai.assert;

(async function loginTest() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();

    let email = 'quadrantfortest@gmail.com'

    // 1.   Open tokopedia.com
    await page.goto('https://tokopedia.com');

    // 2.   Select Menu Masuk / Log in
    await page.waitForTimeout(2000);
    await page.$('[data-testid="btnHeaderLogin"]')
    await page.click((`[data-testid="btnHeaderLogin"]`));

    // 3.   Click Lupa Password
    await page.waitForTimeout(2000);
    await page.$('[data-testid="forgot-password"]')
    await page.click((`[data-testid="forgot-password"]`));
    await page.waitForTimeout(2000);

    // 4.   Input Email 
    await page.waitForTimeout(2000);
    let inputEmail = await page.$('.unf-text-input')
    await inputEmail.click((`.unf-text-input`));
    await inputEmail.type(email, { delay: 100 });
    await page.waitForTimeout(2000);

    // 5.	Click “Lanjut” / Next
    await page.waitForTimeout(2000);
    await page.$('#TopLevelWrapper > form > button')
    await page.click((`#TopLevelWrapper > form > button`));
    await page.waitForTimeout(2000);

    // 6.	CHoose Verification Method
    await page.waitForTimeout(2000);
    await page.$('#TopLevelWrapper > div.css-19midj6 > div > div.css-4koktb > div > div > b')
    await page.click((`#TopLevelWrapper > div.css-19midj6 > div > div.css-4koktb > div > div > b`));
    await page.waitForTimeout(2000);


    // Get OTP from Gmail



    // Screenshot
    // await page.screenshot({ path: 'ss_test/LI_GC_003_ForgetPasswordFeatureUsingEmail.png' });

    // await browser.close();
})();