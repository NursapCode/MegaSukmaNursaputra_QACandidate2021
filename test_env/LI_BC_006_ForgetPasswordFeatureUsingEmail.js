// const { assert } = require('console');
const puppeteer = require('puppeteer');
const { stringify } = require("querystring");
const expect = require('chai').expect;



(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();

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

    // 4.	Click “Lanjut” / Next
    await page.waitForTimeout(2000);
    await page.$('#TopLevelWrapper > form > button')
    await page.click((`#TopLevelWrapper > form > button`));
    await page.waitForTimeout(2000);

    // verify output
    let element = await page.$('.e16qnar73')
    let ErrMessage = await page.evaluate(el => el.textContent, element)
    await page.waitForTimeout(3000);

    expect(ErrMessage).to.be.equal('Nomor Ponsel atau Email harus diisi');

    await page.screenshot({ path: 'ss_test/LI_BC_006_ForgetPasswordFeatureUsingEmail.png' });

    await browser.close();
})();