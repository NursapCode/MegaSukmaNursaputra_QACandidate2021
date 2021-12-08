const puppeteer = require('puppeteer');
const expect = require("chai").expect;

(async function inputUserName() {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();

    // 1.	Open tokopedia.com
    await page.goto('https://tokopedia.com');
    await page.waitForTimeout(2000);

    // 2.	Select Menu Daftar/Sign Up
    await page.click('.css-t0ond8');
    await page.waitForTimeout(2000);

    // 3.	Input Manual with correct format user, but with unregistered email
    const username = await page.$('#regis-input');
    await username.type("asdfgasdfg@gmail.com", { delay: 100 });
    await page.waitForTimeout(2000);

    // 4.	Click Button Daftar / Sign Up
    await page.waitForTimeout(2000);
    link = await page.$eval(".css-10tzox8-unf-btn",
        element => element.disabled);
    expect(link).to.be.equal(
        false
    );
    await page.waitForTimeout(1000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_001_InputUserEmailFormat_001.png' });
    await page.waitForTimeout(2000);

    // 5.	Show Pop up window : Click Yes / Ya, Benar
    await page.click('.css-10tzox8-unf-btn')
    await page.waitForTimeout(3000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_001_InputUserEmailFormat_002.png' });

    // 6.	Go to verification page
    await page.$(`[data-testid="confirmation-primary-button"]`);
    await page.click((`[data-testid="confirmation-primary-button"]`));
    await page.waitForTimeout(2000);

    // Screenshot
    await page.screenshot({ path: 'ss_test/SU_GC_001_InputUserEmailFormat_003.png' });

    await browser.close();
})();