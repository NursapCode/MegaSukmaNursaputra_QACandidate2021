// const { assert } = require('console');
const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();


    let next = '0123456789012345'
    let j = 1;

    // 1.	Open tokopedia.com
    await page.goto('https://tokopedia.com');
    await page.waitForTimeout(5000);

    // 2.	Select Menu Masuk/Log in
    await page.waitForTimeout(2000);
    await page.$('[data-testid="btnHeaderLogin"]')
    await page.click((`[data-testid="btnHeaderLogin"]`));

    // 3.	Input user log in email with data test.
    await page.waitForTimeout(2000);
    let username = await page.$('#email-phone');
    await page.waitForTimeout(2000);
    await username.type(next, { delay: 100 });

    // 4.	Check is button next is disabled
    await page.waitForTimeout(3000);
    var link = await page.$eval("#email-phone-submit",
        element => element.disabled);

    expect(link).to.be.equal(
        true
    );
    await page.waitForTimeout(1000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/LI_BC_002_inputWrongPhoneNumberFormatMax.png' });
    await page.waitForTimeout(3000);

    await browser.close();
})();