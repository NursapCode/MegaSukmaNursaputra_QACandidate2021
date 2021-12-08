const puppeteer = require('puppeteer');
const expect = require('chai').expect;


// const assert = chai.assert;
(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();

    // 1.	Open tokopedia.com
    await page.goto('https://tokopedia.com');
    await page.waitForTimeout(2000);

    // 2.	Select Menu Daftar/Sign U
    await page.click('.css-t0ond8');
    const username = await page.$('#regis-input');
    await page.waitForTimeout(5000);

    // 3.	Input Manual with wrong format user, alphabet_without@gmail.com
    await username.type("asdfg", { delay: 100 });
    await page.waitForTimeout(2000);

    // 4.	Click Button Daftar / Sign Up
    // verify output error message
    let element = await page.$('.ed3tosx7')
    let ErrMessage = await page.evaluate(el => el.textContent, element)
    await page.waitForTimeout(2000);
    expect(ErrMessage).to.be.equal('Format email salah');

    // verify button disabled
    await page.waitForTimeout(2000);
    let link = await page.$eval(".css-1d60za6-unf-btn",
        element => element.disabled);
    expect(link).to.be.equal(
        true
    );

    // Screenshot
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'ss_test/SU_BC_001_InputUserEmailFormat.png' });

    await browser.close();
})();