
describe("DevTools Test on latest chrome", function() {
    it("Devtools Navigation", async function() {
        await browser.url("https://pixijs.io/examples-v5/#/demos-basic/container.js");
        await browser.pause(5000);
        const puppeteer = await browser.getPuppeteer();

        const targets = await puppeteer.targets();
        const devtoolsTarget = await targets.find((t) => {
            return t.type() === 'other' && t.url().startsWith('devtools://');
        });
        devtoolsTarget._targetInfo.type = 'page';
        const devtoolsPage = await devtoolsTarget.page();
        await devtoolsPage.keyboard.down('Control');
        await devtoolsPage.keyboard.press('[');
        await devtoolsPage.keyboard.up('Control');

        await browser.pause(2000);

        const frames = devtoolsPage.frames();
        const iframe = await frames[2];

        await iframe.evaluate(() => {
            var xpath = '/html/body/div/div/div[2]/div[1]/button';
            var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            result.singleNodeValue.click();
        });

        await browser.pause(2000);

        await iframe.evaluate(() => {
            var xpath = '/html/body/div/div/div[1]/div/div[2]/div[1]/button[3]';
            var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            result.singleNodeValue.click();
        });

        await browser.pause(2000);

        await iframe.evaluate(() => {
            var xpath = '/html/body/div/div/div[1]/div/div[2]/div[1]/button[3]';
            var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            result.singleNodeValue.click();
        });

        await browser.pause(10000);
    });
});
