const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();


    let next = ''
    let j = 1;
    for (let i = 0; i < 1; i++) {
        stringify(i);
        next = next + i;

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

        // console.log(is_disabled);
        await page.waitForTimeout(1000);

        await page.screenshot({ path: 'ss_test/LI_BC_001_inputWrongPhoneNumberFormatMin' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;
    }

    await browser.close();
})();