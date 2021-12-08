// const { assert } = require('console');
const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();


    let next = ''
    let j = 1;

    ///////////////////
    // Start From 1
    ///////////////////
    for (let i = 10; i < 20; i++) {
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

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_1_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;
    }

    ///////////////////
    // Start From 2
    ///////////////////
    next = ''
        // j = 1;
    for (let i = 20; i < 30; i++) {
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

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_2_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;

    }

    ///////////////////
    // Start From 3
    ///////////////////
    next = ''
    j = 1;
    for (let i = 30; i < 40; i++) {
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

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_3_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;

    }

    ///////////////////
    // Start From 4
    ///////////////////
    next = ''
    j = 1;
    for (let i = 40; i < 50; i++) {
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

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_4_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;

    }

    ///////////////////
    // Start From 5
    ///////////////////
    next = ''
    j = 1;
    for (let i = 50; i < 60; i++) {
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

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_5_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;

    }

    ///////////////////
    // Start From 7
    ///////////////////
    next = ''
    j = 1;
    for (let i = 70; i < 80; i++) {
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

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_7_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;

    }

    ///////////////////
    // Start From 8
    ///////////////////
    next = ''
    j = 1;
    for (let i = 80; i < 90; i++) {
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
        let link = await page.$eval("#email-phone-submit",
            element => element.disabled);

        expect(link).to.be.equal(
            true
        );

        // console.log(is_disabled);
        await page.waitForTimeout(1000);

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_8_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;

    }

    ///////////////////
    // Start From 9
    ///////////////////
    next = ''
    j = 1;
    for (let i = 90; i < 100; i++) {
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

        await page.screenshot({ path: 'ss_test/LI_BC_003_inputPhoneNumberNo_Zero_And_Six_InFirstChar_9_' + j + '.png' });
        await page.waitForTimeout(3000);
        j = j + 1;

    }

    await browser.close();
})();