import {$, browser} from "@wdio/globals";

describe("DevTools Test on latest chrome", function() {
    it("Devtools Navigation", async function() {
        await browser.url("https://pixijs.io/examples-v5/#/demos-basic/container.js");
        await browser.pause(2000);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await browser.pause(1000);
        await browser.keys(['Meta', '[']);
        await browser.switchToFrame(0);
        await browser.pause(1000);
        await $("body > div > div > div.status.svelte-iqeeoq > div.patch.svelte-iqeeoq > button").click();
        await $("body > div > div > div.outliner.svelte-iqeeoq > div > div.body.svelte-1vjyr8f > div:nth-child(1) > button:nth-child(4)").click();
        await browser.pause(1000);
        await $("body > div > div > div.outliner.svelte-iqeeoq > div > div.body.svelte-1vjyr8f > div:nth-child(1) > button:nth-child(4)").click();
        await browser.switchToParentFrame();
        await browser.switchToWindow(handles[0]);
        await browser.pause(10000);
    });
});
