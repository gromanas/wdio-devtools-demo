import {$, browser} from "@wdio/globals";

describe("DevTools Test on latest chrome", function() {
    it("Devtools Navigation", async function() {
        // Open an example game.
        await browser.url("https://pixijs.io/examples-v5/#/demos-basic/container.js");

        // Get window handles.
        // Handle on index 0 is the main window.
        // Handle on index 1 is the devtools window.
        const handles = await browser.getWindowHandles();

        // Switch to devtools window.
        await browser.switchToWindow(handles[1]);

        // Navigate through devtool tabs.
        // For linux machines use ['Control', '['] .
        await browser.keys(['Meta', '[']);

        // Switch to devtool extension iframe.
        await browser.switchToFrame(0);

        // Manipulate extension.
        await $("body > div > div > div.status.svelte-iqeeoq > div.patch.svelte-iqeeoq > button").click();
        await $("body > div > div > div.outliner.svelte-iqeeoq > div > div.body.svelte-1vjyr8f > div:nth-child(1) > button:nth-child(4)").click();
        await $("body > div > div > div.outliner.svelte-iqeeoq > div > div.body.svelte-1vjyr8f > div:nth-child(1) > button:nth-child(4)").click();

        // Switch back to parent frame in case that you want to continue the navigation through devtool tabs.
        await browser.switchToParentFrame();

        // Switch back to main window.
        await browser.switchToWindow(handles[0]);
    });
});
