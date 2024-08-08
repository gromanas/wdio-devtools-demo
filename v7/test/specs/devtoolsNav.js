
describe("DevTools Test on previous versions of chrome until 102", function() {
    it("Devtools Navigation", async function() {
        // Open an example game.
        await browser.url("https://pixijs.io/examples-v5/#/demos-basic/container.js");

        // Get puppeteer instance from browser
        const puppeteer = await browser.getPuppeteer();

        // Get all targets from the current window
        const targets = puppeteer.targets();

        // Filter all targets and select the one starts from 'devtools://'
        const devtoolsTarget = await targets.find((t) => {
            return t.type() === 'other' && t.url().startsWith('devtools://');
        });

        // Devtools target type is 'other' and we change (we actually hack it) the type to 'page'
        // in order to be able to interact with and expose it's DOM
        // NOTE: you can refer to this page https://pptr.dev/api/puppeteer.targettype
        devtoolsTarget._targetInfo.type = 'page';

        // Returns a page (DOM, elements, selectors, etc.)
        // NOTE: For more info please refer here: https://pptr.dev/api/puppeteer.page
        const devtoolsPage = await devtoolsTarget.page();

        // Navigate through Devtools tabs.
        // For linux machines use ['Control', '['] .
        await devtoolsPage.keyboard.down('Control');
        await devtoolsPage.keyboard.press('[');
        await devtoolsPage.keyboard.up('Control');

        await browser.pause(2000);

        // Get all the iframes from Devtools window related with the current open tab
        const frames = devtoolsPage.frames();

        // Switch to devtool extension iframe.
        const iframe = await frames[2];

        // Use puppetter commands to execute some expressions directly in the Devtools extensions window
        // NOTE: https://pptr.dev/api/puppeteer.page.evaluate
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
    });
});
