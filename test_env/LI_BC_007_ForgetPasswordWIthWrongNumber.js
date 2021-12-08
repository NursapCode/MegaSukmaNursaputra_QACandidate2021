// const { assert } = require('console');
const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();

    let WrongPhone = "9211111111111";
    let WrongEmail = "asdfg@gmail,com";
    // Start Test
    // 1.	Open tokopedia.com
    await page.goto('https://tokopedia.com');
    await page.waitForTimeout(3000);

    // 2.	Select Menu Masuk/Log in
    await page.waitForTimeout(2000);
    await page.$('[data-testid="btnHeaderLogin"]')
    await page.click((`[data-testid="btnHeaderLogin"]`));

    // 3.   Click Lupa Password
    await page.waitForTimeout(2000);
    await page.$('[data-testid="forgot-password"]')
    await page.click((`[data-testid="forgot-password"]`));
    // let username = await page.$('#TopLevelWrapper > form > button');
    await page.waitForTimeout(2000);

    // 4.   Input Phone Number
    await page.waitForTimeout(2000);
    let phone = await page.$('.unf-text-input')
    await phone.click((`.unf-text-input`));
    await phone.type(WrongPhone, { delay: 100 });
    await page.waitForTimeout(2000);

    // 5.	Click “Lanjut” / Next
    await page.waitForTimeout(2000);
    await page.$('#TopLevelWrapper > form > button')
    await page.click((`#TopLevelWrapper > form > button`));
    await page.waitForTimeout(2000);

    // verify output
    let element = await page.$('.e16qnar73')
    let ErrMessage = await page.evaluate(el => el.textContent, element)
    await page.waitForTimeout(3000);

    expect(ErrMessage).to.be.equal('Format email salah');

    await page.screenshot({ path: 'ss_test/LI_BC_007_InputWrongPhoneNumberOrNotRegistered.png' });


    // 6.	Delete Phone Number
    let del = await page.$('.unf-text-input')
    await del.click((`.unf-text-input`));
    await del.click({ clickCount: 13 });
    await page.keyboard.press('Backspace');

    // 7.	Input Wrong Email
    await page.waitForTimeout(2000);
    let email = await page.$('.unf-text-input');
    await email.click((`.unf-text-input`));
    await email.type(WrongEmail, { delay: 100 });
    await page.waitForTimeout(2000);

    // 8.	Click “Lanjut” / Next
    await page.waitForTimeout(2000);
    await page.$('#TopLevelWrapper > form > button')
    await page.click((`#TopLevelWrapper > form > button`));
    await page.waitForTimeout(2000);

    // verify output
    element = await page.$('.e16qnar73')
    ErrMessage = await page.evaluate(el => el.textContent, element)
    await page.waitForTimeout(3000);

    expect(ErrMessage).to.be.equal('Format email salah');

    await page.screenshot({ path: 'ss_test/LI_BC_007_InputWrongPhoneNumberOrNotRegistered.png' });


    // await browser.close();
})();