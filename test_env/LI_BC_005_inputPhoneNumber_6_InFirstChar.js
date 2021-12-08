// const { assert } = require('console');
const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();



    let k = 1;
    let next = '+6'
    for (let i = 0; i < 9; i++) {
        if (i == 2) {
            console.log('not run');
        } else {
            for (let j = 0; j < 7; j++) {
                stringify(i);
                next = next + i;
                next = next + j;

                // Start Test
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

                await page.screenshot({ path: 'ss_test/LI_BC_005_inputPhoneNumber_6_InFirstChar_' + k + '.png' });
                await page.waitForTimeout(3000);
                k = k + 1;
            }
            next = '+6';

        }

    }

    await browser.close();
})();