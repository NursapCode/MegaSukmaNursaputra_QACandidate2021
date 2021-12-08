// const { assert } = require('console');
const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();



    let k = 1;

    let phone = [
        "+62312423",
        "+623124234",
        "+6231242345",
        "+62312423456",
        "+623124234567",
        "+6231242345678",
        "+62312423456789",
        "+623124234567890"
    ]


    for (let j = 0; j < 7; j++) {
        // stringify(i);

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
        await username.type(phone[j], { delay: 100 });

        // 4.	Click button “Selanjutnya”
        await page.waitForTimeout(2000);
        await page.click('#email-phone-submit');
        await page.screenshot({ path: 'ss_test/LI_BC_004_inputPhoneNumber_+_InFirstChar' + k + '.png' });
        await page.waitForTimeout(2000);

        // verify output
        let element = await page.$('.ed3tosx7')
        let ErrMessage = await page.evaluate(el => el.textContent, element)
        await page.waitForTimeout(3000);

        expect(ErrMessage).to.be.equal('Nomor Handphone hanya boleh mengandung angka.');

        k = k + 1;

    }

    await browser.close();
})();