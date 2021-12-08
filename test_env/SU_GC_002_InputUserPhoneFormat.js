// const { assert } = require('console');
const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();


    let next = '3214567';
    let j = 1;
    for (let i = 1; i < 9; i++) {

        stringify(i);
        next = next + i;

        // 1.	Open tokopedia.com
        await page.goto('https://tokopedia.com');
        await page.waitForTimeout(5000);

        // 2.	Select Menu Daftar/Sign Up
        await page.click('.css-t0ond8');
        await page.waitForTimeout(3000);

        // 3.	Input Manual with correct format phone number 8 -15
        const username = await page.$('#regis-input');
        await page.waitForTimeout(3000);
        await username.type(next, { delay: 100 });
        await page.waitForTimeout(3000);

        // Check button not disabled
        await page.waitForTimeout(2000);
        link = await page.$eval(".css-10tzox8-unf-btn",
            element => element.disabled);
        expect(link).to.be.equal(
            false
        );
        await page.waitForTimeout(1000);

        // Screenshot
        await page.screenshot({ path: 'ss_test/SU_GC_002_InputUserPhoneFormat1_' + j + '.png' });
        await page.waitForTimeout(5000);

        // 4.	Click Button Daftar / Sign Up
        await page.click('.css-10tzox8-unf-btn')
        await page.waitForTimeout(3000);

        // Screenshot
        await page.screenshot({ path: 'ss_test/SU_GC_002_InputUserPhoneFormat2_' + j + '.png' });

        // 5.	Show confirmation Pop up window : Click Yes / Ya, Benar
        await page.$(`[data-testid="confirmation-primary-button"]`);
        await page.click((`[data-testid="confirmation-primary-button"]`));
        await page.waitForTimeout(3000);

        // 6.	Go to verification page
        await page.screenshot({ path: 'ss_test/SU_GC_002_InputUserPhoneFormat3_' + j + '.png' });

        j += 1;
        await page.waitForTimeout(1000);

    }

    await browser.close();
})();